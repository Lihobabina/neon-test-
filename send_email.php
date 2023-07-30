<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["selectedFont"])) {
    $selectedFont = $_POST["selectedFont"];

    // Настройки для отправки письма
    $to = "starshova1309@gmail.com"; // Адрес получателя
    $subject = "Выбранный шрифт"; // Тема письма
    $message = "Выбранный шрифт: " . $selectedFont; // Текст письма

    // Отправка письма
    $headers = "From: sender@example.com\r\n"; // Адрес отправителя
    mail($to, $subject, $message, $headers);

    // Ответ на запрос клиента (можно вернуть какие-то данные обратно клиенту)
    echo json_encode(array("status" => "success"));
} else {
    // Ошибка, если данные не были отправлены
    echo json_encode(array("status" => "error", "message" => "Данные не получены."));
}
?>
