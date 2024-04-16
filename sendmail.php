<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'rawaz.karim@gmail.com'; // Ändra till din e-postadress
    $subject = 'Meddelande från din portföljsida';
    $body = "Du har fått ett meddelande från din portföljsida:\n\nNamn: $name\nE-post: $email\nTelefonnummer: $phone\nMeddelande: $message";
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Meddelandet har skickats!";
    } else {
        echo "Något gick fel, försök igen.";
    }
}
?>
