<?php

namespace User;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use DateTime;

class User
{
    private int $id;
    private string $name;
    private string  $email;
    private string $password;
    private DateTime $createdAt;

    public function __construct(int $id, string $name, string $email, string $password)
    {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->createdAt = new DateTime();
    }
    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('id', new Assert\GreaterThan([
            'value' => 0,
        ]));
        $metadata->addPropertyConstraint('name', new Assert\NotBlank());
        $metadata->addPropertyConstraint('name', new Assert\Length(['min' => 3]));
        $metadata->addPropertyConstraint('email', new Assert\NotBlank());
        $metadata->addPropertyConstraint('password', new Assert\NotBlank());
        $metadata->addPropertyConstraint(
            'password',
            new Assert\Length(['min' => 6])
        );
        $metadata->addPropertyConstraint(
            'email',
            new Assert\Email()
        );
    }
    public function toString()
    {
        return '<div style="display: flex;margin-top: 20px;">' .
            '<p style="width: 50px;margin: 0;"><b>Name:</b></p>' . '<p style="width: 100px;margin: 0;">' . $this->name . '</p>' .
            '<p style="width: 75px;margin: 0;"><b>Password:</b></p>' . '<p style="width: 100px;margin: 0;">' . $this->password . '</p>' .
            '<p style="width: 50px;margin: 0;"><b>Email:</b></p>' . '<p style="width: 150px;margin: 0;">' . $this->email . '</p>' .
            '<p style="width: 85px;margin: 0;"><b>Created at:</b></p>' . '<p style="width: 200px;margin: 0;">' . $this->createdAt->format('d.m.Y H:i:s') . '</p>' . '</div>';
    }

    public function toCommentString()
    {
        return '<div style="display: flex;margin-left: 30px;">' .
            '<p style="width: 50px;margin: 0;"><b>Name:</b></p>' . '<p style="width: 70px;margin: 0;">' . $this->name . '</p>' . '</div>';
    }
    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}
