<?php

use Symfony\Component\Validator\Validation;



$validator = Validation::createValidator();

$user1 = new User(0, 'User1', 'user1@mail.ru', "123456");
$user2 = new User(1, 'User2', 'user2@mail.ru', "1234");
$users[] = $user1;
$users[] = $user2;

echo '<h2>Users</h2>';
foreach ($users as $user) {
    $errors = $validator->validate($user);
    if (count($errors) > 0) {
        $errorsString = (string) $errors;
        echo $errorsString;
    } else echo $user->toString();
}

$userComment = 'user №1 kek pem';
$comment1 = new Comment($user1, $userComment);

$userComment = 'user №1 ne ochen';
$comment2 = new Comment($user1, $userComment);

$comments[] = $comment1;
$comments[] = $comment2;
echo '<h2>Comments</h2>';
$dateTime = new DateTime('2022-01-15');
foreach ($comments as $comment) {
    if ($comment->getCreatedAt() > $dateTime) echo $comment->toString();
}
