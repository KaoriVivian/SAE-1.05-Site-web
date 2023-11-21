window.addEventListener("DOMContentLoaded", function () {
    console.log("calculatrice.js connected to " + document.documentURI);
    console.log("calculation launched.");
    /// API
    const vitesse = document.getElementById('vitesse'); // Inputs
    const temps = document.getElementById('temps'); // Inputs
    const poids = document.getElementById('poids'); // Inputs

    //Set a default value of the inputs
    vitesse.value = null;
    temps.value = null;
    poids.value = null;

    const btnCalculer = document.getElementById('btnCalculer'); // Button
    const nbKcal = document.getElementById('nbKcal'); // Div
    const nbMacarons = document.getElementById('nbMacarons'); // Div

    /// HELPFUL
    const error_indicator = document.getElementById('error_indicator');
    let bool_error;

    // Default values whan pages load
    let isTpsVisible = false;
    let isPdsVisible = false;

    vitesse.addEventListener("change", function () {
        const vitesseVal = Number(vitesse.value);
        if (vitesseVal <= 0) {
            error("Merci d'entrer une valeur positive et non égale a zéro");
        } else if (0 < vitesseVal && vitesseVal < 8) {
            error("Cette valeur ne correspond pas à une allure de course, <br> veuillez entrer une nouvelle valeur.");
        } else {
            isTpsVisible = true;
        }

        if (isTpsVisible) {
            document.getElementById('tpsD').style.display = 'inline-block';
            hideError();
        }
    })

    temps.addEventListener('change', function () {
        const tempsVal = Number(temps.value)
        if (tempsVal <= 0) {
            error("Merci d'entrer une valeur positive et non égale a zéro");
        } else {
            isPdsVisible = true
        }

        if (isPdsVisible) {
            document.getElementById('pdsD').style.display = 'block';
            hideError();
        }
    })

    poids.addEventListener('change', function () {
        const poidsVal = Number(poids.value)
        if (poidsVal <= 0) {
            error("Merci d'entrer une valeur positive et non égale à zéro");
        } else if (poidsVal === 69){
            document.getElementById('nice').style.display = 'block'
        } else {
            hideError();
            calculer();
        }
    })

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
            for (i = macarons; i > 1; i--) {
                macarons--;
                nbMacarons.innerHTML += "<img src='./../assets/images/technique/macaron.png' alt='un grand macarons !' style='height: 30px; margin: 0 2.5px;'></img>";
            }

            if (macarons != 0 && macarons >= 0.5) {
                nbMacarons.innerHTML += "<img src='./../assets/images/technique/macaron-moitie.png' alt='une moitié de macarons !' style='height: 15px; margin: 2.5px 2.5px;'></img>";
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

    function error(Message) {
        bool_error = true;
        error_indicator.style.display = 'contents';
        error_indicator.innerHTML = Message;
    }

    function hideError() {
        bool_error = false;
        error_indicator.style.display = 'none';
    }
})