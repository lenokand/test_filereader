<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if (mail("$email", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email , "Сообщение: " .$message , "From: site@loadfile.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
} else{
    echo "при вводе почты возникли ошибки";
}
?>