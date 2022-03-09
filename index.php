<?php

require("vendor/autoload.php");
require("entity/User.php");
require("entity/Comment.php");

use Symfony\Component\Validator\Validation;
use User\User;
use Comment\Comment;

$validator = Validation::createValidatorBuilder()
    ->addMethodMapping('loadValidatorMetadata')
    ->getValidator();

$user1 = new User(1, 'User1', 'user1@mail.ru', "123456");
$user2 = new User(2, 'User2', 'user2@mail.ru', "1234");
$user3 = new User(3, 'User3', 'fdgfdgg', "123456");
$user4 = new User(4, '', 'user4@mail.ru', "123456");
$users[] = $user1;
$users[] = $user2;
$users[] = $user3;
$users[] = $user4;

echo '<h2>Users</h2>';
foreach ($users as $user) {
    $errors = $validator->validate($user);
    if (count($errors) > 0) {
        $errorsString = (string) $errors;
        echo $user->toString();
        echo $errorsString . '</br>';
    } else echo $user->toString();
}

echo '<h2>Comments</h2>';
$comment1 = new Comment($user1, 'user №1 kek pem');
$comment2 = new Comment($user1, 'user №1 ne ochen');

$comments[] = $comment1;
$comments[] = $comment2;

$dateTime = new DateTime('2022-02-01');
foreach ($comments as $comment) {
    if ($comment->getCreatedAt() > $dateTime) echo $comment->toString();
}
