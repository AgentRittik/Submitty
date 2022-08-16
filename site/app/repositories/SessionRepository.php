<?php

namespace app\repositories;

use app\entities\Session;
use Doctrine\ORM\EntityRepository;

class SessionRepository extends EntityRepository {
    /**
     * @return Session[]
     */
    public function getAllByUser(string $user_id): array {
        $qb = $this->_em->createQueryBuilder();
        $qb = $qb->select('s')
            ->from('app\entities\Session', 's')
            ->where('s.user_id = :user_id')
            ->setParameter('user_id', $user_id)
            ->orderBy('s.session_created', 'DESC');
        return $qb->getQuery()->execute();
    }


    /**
     * Terminate all the sessions of a user except the one corresponding to the provided session_id
     * @param string $user_id
     * @param string $session_id
     */
    public function removeUserSessionsExcept(string $user_id, string $session_id) {
        $qb = $this->_em->createQueryBuilder();
        $qb = $qb->delete('app\entities\Session', 's')
            ->where('s.user_id = :user_id')
            ->setParameter('user_id', $user_id)
            ->andWhere('s.session_id != :session_id')
            ->setParameter('session_id', $session_id);
        $qb->getQuery()->execute();
    }

    /**
     * Remove all the expired sessions for all users
     */
    public function removeExpiredSessions() {
        $qb = $this->_em->createQueryBuilder();
        $qb = $qb->delete('app\entities\Session', 's')
            ->where('s.session_expires < CURRENT_TIMESTAMP()');
        $qb->getQuery()->execute();
    }
}
