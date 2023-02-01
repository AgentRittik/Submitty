<?php

namespace app\controllers;

use app\libraries\Core;
use app\libraries\response\WebResponse;
use app\entities\email\EmailEntity;
use Symfony\Component\Routing\Annotation\Route;
use app\views\email\EmailStatusView;
use app\libraries\routers\AccessControl;
use app\repositories\email\EmailRepository;

class EmailStatusController extends AbstractController {
    public function __construct(Core $core) {
        parent::__construct($core);
    }

    /**
     * @Route("/courses/{_term}/{_course}/email_status", methods={"GET"})
     * @AccessControl(role="INSTRUCTOR")
     * @return WebResponse
     */
    public function getEmailStatusPage(): WebResponse {
        $term = $this->core->getConfig()->getterm();
        $course = $this->core->getConfig()->getCourse();

        /** @var EmailRepository $repository */
        $repository = $this->core->getSubmittyEntityManager()->getRepository(EmailEntity::class);
        $num_page = $repository->getPageNum($term, $course);

        return new WebResponse(
            EmailStatusView::class,
            'showEmailStatusPage',
            $num_page,
            $this->core->buildCourseUrl(["email_status_page"])
        );
    }

    /**
     * @Route("/courses/{_term}/{_course}/email_status_page", methods={"GET"})
     * @AccessControl(role="INSTRUCTOR")
     * @return WebResponse
     */
    public function getEmailStatusesByPage(): WebResponse {
        $term = $this->core->getConfig()->getterm();
        $course = $this->core->getConfig()->getCourse();
        $page = isset($_POST['page']) ? $_POST['page'] : 1;

        /** @var EmailRepository $repository */
        $repository = $this->core->getSubmittyEntityManager()->getRepository(EmailEntity::class);
        $result = $repository->getEmailsByPage($page, $term, $course);

        $this->core->getOutput()->useHeader(false);
        $this->core->getOutput()->useFooter(false);
        return new WebResponse(
            EmailStatusView::class,
            'renderStatusPage',
            $result
        );
    }

    /**
     * @Route("/superuser/email_status", methods={"GET"})
     * @AccessControl(level="SUPERUSER")
     * @return WebResponse
     */
    public function getSuperuserEmailStatusPage(): WebResponse {
        /** @var EmailRepository $repository */
        $repository = $this->core->getSubmittyEntityManager()->getRepository(EmailEntity::class);
        $num_page = $repository->getPageNum();

        return new WebResponse(
            EmailStatusView::class,
            'showEmailStatusPage',
            $num_page,
            $this->core->buildUrl(["superuser", "email_status_page"]),
            $this->core->buildUrl()
        );
    }

    /**
     * @Route("/superuser/email_status_page", methods={"GET"})
     * @AccessControl(level="SUPERUSER")
     * @return WebResponse
     */
    public function getSuperuserEmailStatusesByPage(): WebResponse {
        $page = $_GET['page'] ?? 1;
        /** @var EmailRepository $repository */
        $repository = $this->core->getSubmittyEntityManager()->getRepository(EmailEntity::class);
        $result = $repository->getEmailsByPage($page);
        $this->core->getOutput()->useHeader(false);
        $this->core->getOutput()->useFooter(false);
        return new WebResponse(
            EmailStatusView::class,
            'renderStatusPage',
            $result
        );
    }
}
