#!/usr/bin/env bash
# shellcheck enable=all

#### This script creates specific job files to the daemon job queue
#### It should only be invoked by other scripts or by system, not by PHP
#### For more info, see `./submitty_daemon_jobs/submitty_jobs/jobs.py`

SUBMITTY_DAEMON_JOB_Q="${SUBMITTY_DATA_DIR:?}/daemon_job_queue"

# Abstract requirements
R_COURSE_JOB="semester,course"
R_COURSE_GRADEABLE_JOB="${R_COURSE_JOB},gradeable"

# Possible operations, "Job_Name:Job_Requirements_IFS_is_COMMA:Job_Prefix"
# Note that these Job_Prefixes might not equal to the PHPs'
OPS=("RunAutoRainbowGrades:${R_COURSE_JOB}:auto_rainbow"                                        # 0
     "BuildConfig:${R_COURSE_GRADEABLE_JOB}:build_conf"                                         # 1
     "RunGenerateRepos:${R_COURSE_GRADEABLE_JOB}:generate_repos"                                # 2
     "RunLichen:${R_COURSE_GRADEABLE_JOB},config_id,config_data:run_lichen"                     # 3
     "DeleteLichenResult:${R_COURSE_GRADEABLE_JOB},config_id:delete_lichen"                     # 4
     "BulkUpload:${R_COURSE_JOB},timestamp,g_id,filename,is_qr,qr_prefix,qr_suffix,num:bulkup"  # 5
     "CreateCourse:semester,course,head_instructor,group_name:create_course"                    # 6
     "UpdateDockerImages::docker"                                                               # 7
    )

# Execution date, will append to Job_Prefix
DATE_YMD="$(date +%Y%m%d)"

display_help() {
    op_size="${#OPS[@]}"
    echo "Usage:"
    echo -e "$0 \033[0;36m<JobName>\033[0m \033[1;33m<JobParams...>\033[0m"
    echo -e "Dispatch \033[0;36m<JobName>\033[0m with \033[1;33m<JobParams>\033[0m to the daemon job queue"
    echo -e "Note that \033[1;33m<JobParams>\033[0m are ordered!"
    echo -e "Possible \033[0;36m<JobName>\033[0m \033[1;33m<JobParams>\033[0m:"

    for (( i=0; i<op_size; i++ )); do
        IFS=':' read -r name reqs _pref <<< "${OPS[i]}"
        echo -e "  \033[0;36m${name}\033[0m \033[1;33m${reqs//,/ }\033[0m"
    done
}

# log error to stderr and exit
panic() {
    echo -e >&2 "$0:\033[1;31m [ERR!] $1\033[0m"
    exit 1
}

# log warning to stderr
warn() {
    echo -e >&2 "$0:\033[1;33m [WARN] $1\033[0m"
}

# log info to stderr
info() {
    echo -e >&2 "$0:\033[0;36m [INFO] $1\033[0m"
}


JOB_NAME=""
JOB_REQS=""
JOB_PREFX=""

get_job_index() {
    # length of OPS
    op_size=${#OPS[@]}

    # iterate and parse OPS, break if match
    for (( i=0; i<op_size; i++ )); do
        name=$(echo "${OPS[i]}" | cut -d':' -f1)
        [[ "$1" == "${name}" ]] && {
            IFS=':' read -r JOB_NAME JOB_REQS JOB_PREFX <<< "${OPS[i]}"
            IFS=',' read -r -a JOB_REQS <<< "${JOB_REQS}"
            info "Got job ${JOB_NAME}, prefix ${JOB_PREFX}"
            info "Parsed requirements: ${JOB_REQS[*]}"
            break
        }
    done

    # check if any job scheme is selected
    [[ -z "${JOB_NAME}" ]] && {
        warn "Job name does not match to any job, see the help below"
        info "Job name: $1"
        display_help
        panic "No matched job"
    }
}


JSON_ARGS=""

parse_job_reqs() {
    JSON_ARGS="jq -n --arg job ${JOB_NAME}"
    # check the param size
    info "Checking the size of parameters"
    [[ "$#" -ne "${#JOB_REQS[@]}" ]] && {
        warn "The number of argument does not match with the job requirement"
        info "Job name: ${JOB_NAME}"
        info "Job arguments (${#JOB_REQS}): ${JOB_REQS[*]}"
        info "Got arguments ($#): ${*}"
        warn "See the help below:"
        display_help
        panic "Job parameters do not match"
    }
    warn "Note that this script does not verify the integrity of parameters"

    for (( i=0; i<${#JOB_REQS[@]}; i++ )); do
        JSON_ARGS="${JSON_ARGS} --arg ${JOB_REQS[i]} $1"
        shift 1
    done

    info "${JSON_ARGS}"

    if ! JSON_DATA=$(${JSON_ARGS} "\$ARGS.named"); then
        panic "Failed to create json"
    fi

    info "Constructed json query:"
    echo "${JSON_DATA}" | {
        while IFS= read -r json_line; do
            info "${json_line}"
        done
    }
}


dispatch() {
    info "Dispatching job"
    echo "${JSON_DATA}" > "${SUBMITTY_DAEMON_JOB_Q}/${JOB_PREFX}${DATE_YMD}.json" \
        || panic "Dispatching failed"
    info "Job dispatched"
}


# Check the dispatching queue
[[ ! -d "${SUBMITTY_DAEMON_JOB_Q}" ]] && {
    panic ""
}

get_job_index "$@"
shift 1

parse_job_reqs "$@"

dispatch
