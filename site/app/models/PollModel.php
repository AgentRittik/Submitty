<?php

namespace app\models;

use app\libraries\Core;

/**
 *
 * Class PollModel
 *
 * @method int getId()
 * @method string getName()
 * @method string getQuestion()
 * @method string getQuestionType()
 * @method string|null getImagePath()
 */
class PollModel extends AbstractModel {
    /** @prop-read int */
    protected $id;
    /** @prop-read string */
    protected $name;
    /** @prop-read string */
    protected $question;
    /** @prop-read string */
    protected $question_type;
    protected $responses;
    /** @prop-read array */
    protected $answers;
    /** @prop-read array */
    protected $user_responses;
    protected $release_date;
    protected $status;
    /** @prop-read string|null */
    protected $image_path;
    /** @prop-read string */
    protected $release_histogram;

    public function __construct(Core $core, $id, $name, $question, $question_type, $status, $release_date, $image_path, $release_histogram) {
        parent::__construct($core);
        $this->id = $id;
        $this->name = $name;
        $this->question = $question;
        $this->question_type = $question_type;
        $this->status = $status;
        $this->release_date = $release_date;
        $this->image_path = $image_path;
        $this->release_histogram = $release_histogram;
    }

    public function getResponses() {
        // If this is the first time the responses have been queried, make a DB query.  Otherwise use the existing data.
        if (!isset($this->responses)) {
            $this->responses = $this->core->getQueries()->getResponses($this->getId());
        }
        return array_keys($this->responses);
    }

    public function getAnswers() {
        // If this is the first time the answers have been queried, make a DB query.  Otherwise use the existing data.
        if (!isset($this->answers)) {
            $this->answers = $this->core->getQueries()->getAnswers($this->getId());
        }
        return $this->answers;
    }

    public function isOpen() {
        return $this->status == "open";
    }

    public function isClosed() {
        return $this->status == "closed";
    }

    public function isEnded() {
        return $this->status == "ended";
    }

    public function getUserResponses() {
        // Only fetch the responses if they are needed, and cache the result
        if (!isset($this->user_responses)) {
            $this->user_responses = $this->core->getQueries()->getUserResponses($this->id);
        }
        return $this->user_responses;
    }

    public function getUserResponse($user_id) {
        if (!isset($this->user_responses[$user_id][0])) {
            return null;
        }

        return $this->user_responses[$user_id];
    }

    public function getResponseString($response_id) {
        if (isset($this->responses[$response_id])) {
            return $this->responses[$response_id];
        }
        return "No Response";
    }

    public function getAllResponsesString($response_id) {
        if (count($this->responses) == 1) {
            return $this->responses[$response_id[0]];
        }
        else {
            $ret_string = "";
            $first_answer = true;
            foreach ($this->responses as $id => $response) {
                if (in_array($id, $response_id)) {
                    if (!$first_answer) {
                        $ret_string .= ", " . $response;
                    }
                    else {
                        $first_answer = false;
                        $ret_string .= $response;
                    }
                }
            }
            return $ret_string;
        }
    }

    public function getReleaseDate() {
        return $this->release_date;
    }

    public function isCorrect($response) {
        return in_array($response, $this->getResponses()) && in_array($response, $this->answers);
    }

    public function isInPast() {
        return date("Y-m-d") > $this->release_date;
    }

    public function isInFuture() {
        return date("Y-m-d") < $this->release_date;
    }

    public function isToday() {
        return date("Y-m-d") == $this->release_date;
    }

    public function isHistogramAvailableNever() {
        return $this->release_histogram == "never";
    }

    public function isHistogramAvailableWhenEnded() {
        return $this->release_histogram == "when_ended";
    }

    public function isHistogramAvailableAlways() {
        return $this->release_histogram == "always";
    }

    public function isHistogramAvailable() {
        return ($this->isHistogramAvailableAlways() && !$this->isClosed()) || ($this->isHistogramAvailableWhenEnded() && $this->isEnded());
    }
}
