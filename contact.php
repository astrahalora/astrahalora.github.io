<?php include ($_SERVER['DOCUMENT_ROOT'].'/www-public/partials/contactHead.php');
$current_page = 'contact';
?>
<?php include ($_SERVER['DOCUMENT_ROOT'].'/www-public/partials/nav.php');
?>

<body>
<div class="tetra">
    <div class="info">Send a Message</div>
    <form action="contact2.php" method="post" name="form" class="form-box">
        <label for="name">Name:</label><br>
        <input type="text" name="name" class="inp" placeholder="Your Name or Pseudonym" required><br>
        <label for="email">Email:</label><br>
        <input type="email" name="mail" class="inp" placeholder="Your Email" required><br>
        <label for="phone">Phone:</label><br>
        <input type="tel" name="phone" class="inp" placeholder="Your Phone (Optional)"><br>
        <label for="message">Message:</label><br>
        <textarea name="msg" id="msg-box" placeholder="Your Message... (1500 characters maximum)" maxlength="1500"></textarea><br>
        <input type="submit" name="submit" value="Send" class="sub-btn">
        <input type="reset" name="reset" value="Reset" class="sub-btn">
    </form>
    <div class="priv">
        <a href="privacyPolicy">Privacy Policy</a>
    </div>
</div>
</body>

</html>