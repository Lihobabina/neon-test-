<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Получение данных из формы
  $text = $_POST["text"];
  $font = $_POST["font"];
  $color = $_POST["color"];
  $size1 = $_POST["size1"];
  $size2 = $_POST["size2"];
  $backboard = $_POST["backboard"];
  $notes = $_POST["notes"];

  // Составление содержимого письма
  $to = "starshova1309@gmail.com"; // Замените на адрес электронной почты получателя
  $subject = "Данные формы";
  $message = "Текст: $text\nШрифт: $font\nЦвет: $color\nРазмер1: $size1\nРазмер2: $size2\nФон: $backboard\nЗаметки: $notes";

  // Отправка письма
  $headers = "From: sender@example.com"; // Замените на адрес электронной почты отправителя
  if (mail($to, $subject, $message, $headers)) {
    echo "Письмо успешно отправлено!";
  } else {
    echo "Не удалось отправить письмо.";
  }
}
?>
