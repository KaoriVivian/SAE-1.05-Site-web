window.addEventListener("DOMContentLoaded", function () {
    /// API
    const vitesse = document.getElementById('vitesse'); // Inputs
    const temps = document.getElementById('temps'); // Inputs
    const poids = document.getElementById('poids'); // Inputs
    const btnCalculer = document.getElementById('btnCalculer'); // Button
    const nbKcal = document.getElementById('nbKcal'); // Div
    const nbMacarons = document.getElementById('nbMacarons'); // Div

    /// HELPFUL
    const error_indicator = document.getElementById('error_indicator');
    let bool_error;

    //Calculer lorsque l'utilisateur appuis sur le button...
    btnCalculer.addEventListener('click', function () {
        CheckInputs();
        Calculer();
    });

    function Calculer() {
        let vitesseVal = Number(vitesse.value);
        let tempsVal = Number(temps.value);
        let poidsVal = Number(poids.value);

        let kcalMN = (vitesseVal * 3.5 * poidsVal) / 200;
        let kcal = kcalMN * tempsVal;

        let macarons = (kcal / 100);

        if (bool_error !== true) {
            nbKcal.innerHTML = kcal + " Kcal consommées.";
            nbMacarons.innerHTML = macarons + " macarons / calories consommées.";
        }
        else
        {
            nbKcal.innerHTML = null;
            nbMacarons.innerHTML = null;
        }

    }

    function CheckInputs() {
        if (vitesse.value === '' || temps.value === '' || poids.value === '') {
            error("Veuillez remplir les informations manquants.");
            return;
        } else {
            hideError();
        }
    };


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