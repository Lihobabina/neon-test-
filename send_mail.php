<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $text = isset($_POST["text"]) ? $_POST["text"] : "";
  $selectedFont = isset($_POST["selected_font"]) ? $_POST["selected_font"] : "";
  $selectedColor = isset($_POST["selected_color"]) ? $_POST["selected_color"] : "";
  $length = isset($_POST["length"]) ? $_POST["length"] : "";
  $height = isset($_POST["height"]) ? $_POST["height"] : "";
  $backboard = isset($_POST["backboard"]) ? $_POST["backboard"] : "";
  $where = isset($_POST["where"]) ? $_POST["where"] : "";
  $email = isset($_POST["email"]) ? $_POST["email"] : "";
  $notes = isset($_POST["notes"]) ? $_POST["notes"] : "";

  // Prepare email message
  $to = "starshova1309@gmail.com"; // Replace with your email address
  $subject = "Order Details";
  $message = "Text: " . $text . "\nSelected Font: " . $selectedFont . "\nSelected Color: " . $selectedColor . "\nLength: " . $length . "\nHeight: " . $height . "\nBackboard: " . $backboard . "\nWhere: " . $where . "\nEmail: " . $email . "\nNotes: " . $notes;

  // Send email
  mail($to, $subject, $message);
}
?> 