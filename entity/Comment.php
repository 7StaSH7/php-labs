<?php

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
        $min = strtotime($start_date);
        $max = strtotime($end_date);

        $val = rand($min, $max);

        return date('d.m.Y H:i:s', $val);
    }
    public function toString()
    {
        return  '<div style="display: flex;margin-top: 20px;">' . $this->comment . $this->user->toCommentString() . '</div>';
    }
    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}
