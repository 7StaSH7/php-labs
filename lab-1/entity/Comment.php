<?php

namespace Comment;

use User\User;
use DateTime;

class Comment
{
    private User $user;
    private string $comment;
    private DateTime $createdAt;

    public function __construct(User $user, string $comment)
    {
        $this->user = $user;
        $this->comment = $comment;
        $this->createdAt = $this->randomDate(new DateTime('2022-01-01'), new DateTime());
    }

    private function randomDate($start_date, $end_date)
    {
        $randomTimestamp = mt_rand($start_date->getTimestamp(), $end_date->getTimestamp());
        $randomDate = new DateTime();
        $randomDate->setTimestamp($randomTimestamp);
        return $randomDate;
    }
    public function toString()
    {
        return  '<div style="display: flex;margin-top: 20px;">' . $this->comment . $this->user->toCommentString() . $this->createdAt->format('d.m.Y H:i:s') . '</div>';
    }
    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}
