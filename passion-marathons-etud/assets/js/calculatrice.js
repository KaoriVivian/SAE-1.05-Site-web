window.addEventListener("DOMContentLoaded", function () {
    console.log("calculatrice.js connected to " + document.documentURI);
    console.log("calculation launched.");
    /// API
    const speed = document.getElementById('speed'); // Inputs
    const time = document.getElementById('time'); // Inputs
    const weight = document.getElementById('weight'); // Inputs
    const nbKcal = document.getElementById('nbKcal'); // Div
    const nbMacarons = document.getElementById('nbMacarons'); // Div
    const calculatorGoals = document.getElementById('calculatorGoals');
    const calcBody = document.getElementById('calculatorBody');
    const btnStart = document.getElementById('btnStart');

    //Set a default value of the inputs
    speed.value = null;
    time.value = null;
    weight.value = null;

    /// HELPFUL
    const error_indicator = document.getElementById('error_indicator');
    let bool_error;

    // Default values whan pages load
    let isTimeVisible = false;
    let isWgtVisible = false;
    calcBody.style.display = "none";
    calculatorGoals.style.display = "contents";


    btnStart.addEventListener('click', function () {
        calculatorGoals.style.display = "none";
        calcBody.style.display = "contents";
    });

    speed.addEventListener("change", function () {
        let spdValue = Number(speed.value);

        console.log("Speed value : " + spdValue);

        if (spdValue <= 0) {
            error("Merci d'entrer une valeur positive et non égale a zéro");
            isTimeVisible = false;
        } else if (0 < spdValue && spdValue < 8) {
            error("Cette valeur ne correspond pas à une allure de course, <br> veuillez entrer une nouvelle valeur.");
            isTimeVisible = false;
        } else if (spdValue > 50) {
            error("Merci d'enter une valeur réaliste")
            isTimeVisible = false;
        } else {
            isTimeVisible = true;
        }


        if (isTimeVisible) {
            document.getElementById('timeD').style.display = 'inline-block';
            hideError();
        } else {
            document.getElementById('timeD').style.display = 'none';
            document.getElementById('wgtD').style.display = 'none';
        }

        if (time.value != "" && weight.value != "") {
            calculation();
        }

    });

    time.addEventListener('change', function () {
        let timeValue = Number(time.value)
        if (timeValue <= 0) {
            isWgtVisible = false;
            error("Merci d'entrer une valeur positive et non égale a zéro");
        } else if (timeValue > 360) {
            error("Merci d'entrer une valeur réaliste");
            isWgtVisible = false;
        } else {
            isWgtVisible = true;
        }

        if (isWgtVisible) {
            document.getElementById('wgtD').style.display = 'block';
            hideError();
        } else {
            document.getElementById('wgtD').style.display = 'none';
        }

        if (weight.value != "" && speed.value != "") {
            calculation();
        }
    });

    weight.addEventListener('change', function () {
        let wgtValue = Number(weight.value)
        if (wgtValue <= 0) {
            error("Merci d'entrer une valeur positive et non égale à zéro");
        } else if (wgtValue === 69) {
            document.getElementById('nice').style.display = 'block'; //Dans la culture populaire, le chiffre 69 faisant référence a la position sexuelle et est très humoristique, ceci est donc un easter egg :)
        } else if (wgtValue > 250) {
            error("Merci d'entrer une valeur réaliste");
        }

        hideError();
        calculation();
    });

    /// TO-DO : arround values. Display images for each macarons.
    function calculation() {
        //START
        console.log("Programme start.");
        console.log("Setup [start]");

        //SETUP
        nbKcal.innerHTML = null;
        nbMacarons.innerHTML = null;
        let spdValue = Number(speed.value);
        let timeValue = Number(time.value);
        let wgtValue = Number(weight.value);
        console.log("Setup [done]");

        //API
        console.log("Share result...");
        let kcalMN = (spdValue * 3.5 * wgtValue) / 200;
        let kcal = kcalMN * timeValue;
        kcal = Math.round(kcal * 1000) / 1000

        let macarons = (kcal / 100);
        macarons = Math.round(macarons * 1000) / 1000

        console.log(macarons); // See the value of "macarons" before show the images.

        if (macarons >= 0.5) {
            macarons -= macaron(macarons, 25, "Le macaron ultime");
            macarons -= macaron(macarons, 10, "Le macaron céleste");
            macarons -= macaron(macarons, 5, "Le roi des macarons");
            macarons -= macaron(macarons, 2, "Le double macaron");
            macarons -= macaron(macarons, 1, "Le macaron classique");
            macarons -= macaron(macarons, 0.5, "La moitié d'un macaron classique");

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
        console.log("Programme finish.");

    }

    function macaron(maca, num, alt) {
        removeMac = 0
        if (maca > 0) {
            for (maca; maca > num; maca -= num) {
                nbMacarons.innerHTML += "<div class='tooltip'><img src='./../assets/images/technique/macaron" + num + ".png' alt='" + alt + "' style='height: 50px; margin: 0 2.5px;'></img><span class='tooltiptext'>" + num + "</span></div>";
                removeMac += num
            }
        }

        return removeMac;
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