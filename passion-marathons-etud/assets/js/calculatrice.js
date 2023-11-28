window.addEventListener("DOMContentLoaded", function () {
    console.log("calculatrice.js connected to " + document.documentURI);
    console.log("calculation launched.");
    /// API
    const vitesse = document.getElementById('vitesse'); // Inputs
    const temps = document.getElementById('temps'); // Inputs
    const poids = document.getElementById('poids'); // Inputs
    const nbKcal = document.getElementById('nbKcal'); // Div
    const nbMacarons = document.getElementById('nbMacarons'); // Div
    const ObjectifCalc = document.getElementById('objectif-calculatrice');
    const BodyCalc = document.getElementById('body-calculatrice');
    const btnStart = document.getElementById('btnStart');

    //Set a default value of the inputs
    vitesse.value = null;
    temps.value = null;
    poids.value = null;

    /// HELPFUL
    const error_indicator = document.getElementById('error_indicator');
    let bool_error;

    // Default values whan pages load
    let isTpsVisible = false;
    let isPdsVisible = false;
    BodyCalc.style.display = "none";
    ObjectifCalc.style.display = "contents";


    btnStart.addEventListener('click', function()
    {
        start();
    });

    vitesse.addEventListener("change", function () {
        const vitesseVal = Number(vitesse.value);
        if (vitesseVal <= 0) {
            error("Merci d'entrer une valeur positive et non égale a zéro");
        } else if (0 < vitesseVal && vitesseVal < 8) {
            error("Cette valeur ne correspond pas à une allure de course, <br> veuillez entrer une nouvelle valeur.");
        } else if (vitesseVal > 50){
            error("Merci d'enter une valeur réaliste")
        }
        
        isTpsVisible = true;


        if (isTpsVisible) {
            document.getElementById('tpsD').style.display = 'inline-block';
            hideError();
        }

        if (temps.value != "" && poids.value != ""){
            calculer()
        }
    });

    temps.addEventListener('change', function () {
        const tempsVal = Number(temps.value)
        if (tempsVal <= 0) {
            error("Merci d'entrer une valeur positive et non égale a zéro");
        } else if (tempsVal < 360){
            error("Merci d'entrer une valeur réaliste")
        } 
        isPdsVisible = true

        if (isPdsVisible) {
            document.getElementById('pdsD').style.display = 'block';
            hideError();
        }

        if (poids.value != "" && vitesse.value != ""){
            calculer()
        }
    });

    poids.addEventListener('change', function () {
        const poidsVal = Number(poids.value)
        if (poidsVal <= 0) {
            error("Merci d'entrer une valeur positive et non égale à zéro");
        } else if (poidsVal === 69){
            document.getElementById('nice').style.display = 'block'; //Dans la culture populaire, le chiffre 69 faisant référence a la position sexuelle et est très humoristique, ceci est donc un easter egg :)
        } else if (poidsVal > 250){
            error("Merci d'entrer une valeur réaliste");
        }

        hideError();
        calculer();
    });

    /// TO-DO : arround values. Display images for each macarons.
    function calculer() {
        //START
        console.log("Programme start.");
        console.log("Setup [start]");

        //SETUP
        nbKcal.innerHTML = null;
        nbMacarons.innerHTML = null;
        let vitesseVal = Number(vitesse.value);
        let tempsVal = Number(temps.value);
        let poidsVal = Number(poids.value);
        console.log("Setup [done]");

        //API
        console.log("Share result...");
        let kcalMN = (vitesseVal * 3.5 * poidsVal) / 200;
        let kcal = kcalMN * tempsVal;
        kcal = Math.round(kcal * 1000) / 1000

        let macarons = (kcal / 100);
        macarons = Math.round(macarons * 1000) / 1000

        console.log(macarons); // See the value of "macarons" before show the images.
        
        // 0.5,1,
        if (macarons >= 0.5) {
            macarons -= macaron(macarons,25,"Le macaron ultime")
            macarons -= macaron(macarons,10,"Le macaron céleste")
            macarons -= macaron(macarons,5,"Le roi des macarons")
            macarons -= macaron(macarons,2,"Le double macaron")
            macarons -= macaron(macarons,1,"Le macaron classique")

            if (macarons != 0 && macarons >= 0.5) {
                nbMacarons.innerHTML += "<img src='./../assets/images/technique/macaron0.5.png' alt='Le demi macaron' style='height: 50px; margin: 2.5px 2.5px;'></img>";
                macarons = macarons - 0.5;
            }

            if (!bool_error) {
                nbKcal.innerHTML = kcal + " Kcal consommées.";
                nbMacarons.innerHTML += " macarons / calories consommées.";
            } else {
                nbKcal.innerHTML = null;
                nbMacarons.innerHTML = null;
            }

        } else {

            if (!bool_error) {
                nbKcal.innerHTML = kcal + " Kcal consommées.";
                nbMacarons.innerHTML += macarons + " macarons / calories consommées.";
            } else {
                nbKcal.innerHTML = null;
                nbMacarons.innerHTML = null;
            }
        }

        // FINISH
        console.log(macarons); // See the value of "macarons" after show the images.
        console.log("Programme finish.");

    }

    function macaron(mac,n,alt){
        a = 0
        for (mac; mac > n;mac-=n){
            nbMacarons.innerHTML += "<img src='./../assets/images/technique/macaron"+n+".png' alt='"+alt+"' style='height: 50px; margin: 0 2.5px;'></img>";
            a+=n
        }
        return a
    }
    function error(Message) {
        bool_error = true;
        error_indicator.style.display = 'contents';
        error_indicator.innerHTML = Message;
    }

    function hideError() {
        bool_error = false;
        error_indicator.style.display = 'none';
    }

    function start()
    {
        ObjectifCalc.style.display = "none";
        BodyCalc.style.display = "contents";
    }
})