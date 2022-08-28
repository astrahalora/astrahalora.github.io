<?php include ($_SERVER['DOCUMENT_ROOT'].'/www-public/partials/commissionsHead.php');
$current_page = 'commissions';
?>
<?php include ($_SERVER['DOCUMENT_ROOT'].'/www-public/partials/nav.php');
?>

<body>
    <div class="genInfo">
    <h2>Commissions<br>Status: Not Available</h2>
        <p>Please consult the pricing chart below to get an idea of how much your order would cost. Only elements or themes
            that cannot be included in projects would be: universally objectionable or banned material (pedophilia,
            rape, extreme gore, suicide, racist or hateful propaganda, politically charged content) and antropomorfic creatures. 
            What can be included: minor animal features (cat eyes, tails, shark teeth, horns, goat legs, and similar), nsfw. 
        </p><br>
        <h2 id="sample">HOVER OVER BACKGROUND TYPE WANTED TO SEE SAMPLE</h2>
    </div>
    <div class="comm" id="this">
        <div>
            <H3>Bust</H3>
            <p>Also referred to as head & shoulders. One character.</p><br><br>
            <p>Bust - No Background: €20</p><br><br>
            <p onmouseover="setNewImage()" onmouseout="setOldImage()" class="clicka">Bust - Simple Background: €25</p><br><br>
            <p onmouseover="setNewImage2()" onmouseout="setOldImage2()" class="clicka2">Bust - Complex Background: €35</p>
            
        </div>
        <div><img src="/www-public/assets/images/bust_no_back.jpg" alt="Image of Bust with No Background" id="bust">
            <img src="/www-public/assets/images/bust_simple.jpg" alt="Image of Bust with Simple Background" id="bust2">
            <img src="/www-public/assets/images/bust_complex.jpg" alt="Image of Bust with Complex Background" id="bust3"></div>
    </div>
    <div class="comm">
        <div>
            <H3>Half Body</H3>
            <p>Portrayed from head down to hips. One character.</p><br><br>
            <p>Half Body - No Background: €50</p><br><br>
            <p onmouseover="setNewImage3()" onmouseout="setOldImage3()" class="clicka">Half Body - Simple Background: €70</p><br><br>
            <p onmouseover="setNewImage4()" onmouseout="setOldImage4()" class="clicka2">Half Body - Complex Background: €100</p><br><br>
            <p>Other:</p><br>
            <ul>
                <li>Extra character: €20</li><br>
                <li>Animal companion: €10</li>
            </ul>
        </div>
        <div><img src="/www-public/assets/images/half_body.jpg" alt="Image of Half Body with No Background" id="halfBody">
            <img src="/www-public/assets/images/half_body_simple.jpg" alt="Image of Half Body with Simple Background" id="halfBody2">
            <img src="/www-public/assets/images/half_body_complex.jpg" alt="Image of Half Body with Complex Background" id="halfBody3"></div>
    </div>
    <div class="comm">
        <div>
            <H3>Full Body</H3>
            <p>Portrayed from head down to feet. One character.</p><br><br>
            <p>Full Body - No Background: €70</p><br><br>
            <p onmouseover="setNewImage5()" onmouseout="setOldImage5()" class="clicka">Full Body - Simple Background: €100</p><br><br>
            <p onmouseover="setNewImage6()" onmouseout="setOldImage6()" class="clicka2">Full Body - Complex Background: €150</p><br><br>
            <p>Other:</p><br>
            <ul>
                <li>Extra character: €30</li><br>
                <li>Animal companion: €10</li>
            </ul>
        </div>
        <div>
            <img src="/www-public/assets/images/full_body.jpg" alt="Image of Full Body with No Background" id="fullBody">
            <img src="/www-public/assets/images/full_body_simple.jpg" alt="Image of Full Body with Simple Background" id="fullBody2">
            <img src="/www-public/assets/images/full_body_complex.jpg" alt="Image of Full Body with Complex Background" id="fullBody3">
        </div>
    </div>

    <div class="order">
        <h2>How To Order</h2>
        <p>Please send a message (to <span style="color:pink">astrahalora@gmail.com</span>) that includes the following information: Size of Commission
            (Bust, Half Body, Full Body), type of background (None, Simple, Complex), any other elements
            to include (extra Character, Animal Companion), a description of the character (Eye Color,
            Skin Color, Hair Color, Distinctive Features, Weight, Height, Clothing Style, Desired Expression/Mood,
            Desired Posture (if any), Desired Location/Environment (if any), and any other information you think is 
            important).
        </p>
    </div>

    <div class="order">
        <h2>When Will I Get My Order?</h2>
        <p>The first thing you will get is the initial lineart sketch of the comission. You can request changes
            be made to this (within reason). Complete lineart change is associated with a fee respective to size (€5 for Bust,
            €10 for Half Body, and €20 for Full Body). You can request as many complete changes as you want by 
            paying the fee each time. Once the lineart is confirmed, you can expect to get your order btween 2-5 business days
            (for Bust), and 2-10 business days (for Half Body and Full Body).
        </p>
    </div>

    <script src="/www-public/assets/js/picchanger.js"></script>
</body>

<?php include ($_SERVER['DOCUMENT_ROOT'].'/www-public/partials/footer2.php');
?>

</html>