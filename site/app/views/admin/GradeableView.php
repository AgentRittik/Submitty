<?php

namespace app\views\admin;

use app\views\AbstractView;
use app\libraries\Utils;

class GradeableView extends AbstractView {
    public function uploadConfigForm($target_dir, $all_files, $gradeable_id, $inuse_config) {
        $this->core->getOutput()->addBreadcrumb("upload config", $this->core->buildCourseUrl(['autograding_config']));
        $course = $this->core->getConfig()->getCourse();

        return $this->core->getOutput()->renderTwigTemplate("admin/UploadConfigForm.twig", [
            "all_files" => $all_files,
            "target_dir" => $target_dir,
            "course" => $course,
            "gradeable_id" => $gradeable_id,
            "inuse_config" => $inuse_config,
            "upload_url" => $this->core->buildCourseUrl(['autograding_config', 'upload']),
            "delete_url" => $this->core->buildCourseUrl(['autograding_config', 'delete']),
            "rename_url" => $this->core->buildCourseUrl(['autograding_config', 'rename']),
            "display_url" => $this->core->buildCourseUrl(['display_file']),
            "back_url" => $gradeable_id !== ''
                ? $this->core->buildCourseUrl(['gradeable', $gradeable_id, 'update?nav_tab=1'])
                : '',
            "csrf_token" => $this->core->getCsrfToken()
        ]);
    }

    public function AdminGradeablePeersForm($peer_grader_pairs, $students) {
        $student_autofill = Utils::getAutoFillData($students);

        return $this->core->getOutput()->renderTwigTemplate("admin/admin_gradeable/AdminGradeablePeersForm.twig", [
            'pair_grader_pairs' => $peer_grader_pairs,
            'student_autofill' => $student_autofill
        ]);
    }
}
