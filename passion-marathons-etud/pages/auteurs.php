<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./../assets/css/auteurs.css">
    <link rel="stylesheet" href="./../assets/css/accessibilitemenu.css">
    <script src="https://kit.fontawesome.com/620fc58eba.js" crossorigin="anonymous"></script>
</head>

<body>
    <?php include './../assets/compenents/accesibilite.html'; ?>

    <div id="conteneur">
        <div id="section_gauche">
            <div class="clickable" onclick="window.location.href = './auteurs/viviane.php'"
                style="z-index: 3; position: absolute; width: inherit;"  tabindex="1"></div>
            <div
                style="display: flex; position: absolute; flex-direction: column; align-items: center; top: 50px; width: inherit;">
                <h1 id="title" tabindex="1">Viviane</h1>
                <nav class="rs text" tabindex="1">
                    <i class="fa-brands fa-instagram" tabindex="1"></i>
                    <i class="fa-brands fa-x-twitter" tabindex="1"></i>
                    <i class="fa-brands fa-discord" tabindex="1"></i>
                </nav>
            </div>
        </div>
        <div id="section_droite">
            <div class="clickable" onclick="window.location.href = './auteurs/khaled.php'"
                style="z-index: 3; position: absolute; width: inherit;"  tabindex="1"></div>
            <div
                style="display: flex; position: absolute; flex-direction: column; align-items: center; bottom: 50px; width: inherit;">
                <h1 id="title" tabindex="1">Khaled</h1>
                <nav class="rs text" tabindex="1">
                    <i class="fa-brands fa-discord" tabindex="1"></i>
                    <i class="fa-brands fa-whatsapp" tabindex="1"></i>
                </nav>
            </div>
        </div>
    </div>

    <script src="./../assets/js/accessV2.js"></script>

</body>

</html>