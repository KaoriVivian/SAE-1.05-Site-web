window.addEventListener("DOMContentLoaded", function () {
    /// API
    const vitesse = document.getElementById('vitesse'); // Inputs
    const temps = document.getElementById('temps'); // Inputs
    const poids = document.getElementById('poids'); // Inputs

    //Set a default value of the inputs
    vitesse.value = ""
    temps.value = ""
    poids.value = ""

    const btnCalculer = document.getElementById('btnCalculer'); // Button
    const nbKcal = document.getElementById('nbKcal'); // Div
    const nbMacarons = document.getElementById('nbMacarons'); // Div

    /// HELPFUL
    const error_indicator = document.getElementById('error_indicator');
    let bool_error;

    // Default values whan pages load
    let isTpsVisible = false
    let isPdsVisible = false
    
    vitesse.addEventListener("change",function(){
        const vitesseVal = Number(vitesse.value);
        if (vitesseVal<=0){
            error("Merci d'entrer une valeur positive et non égale a zéro");
        }else if (0 < vitesseVal && vitesseVal < 8) {
            error("Cette valeur ne correspond pas à une allure de course");
        }
        else{isTpsVisible = true;}

        if (isTpsVisible) {document.getElementById('tpsD').style.display = 'inline-block';hideError();}
    })

    temps.addEventListener('change',function(){
        const tempsVal = Number(temps.value)
        if (tempsVal<=0){
            error("Merci d'entrer une valeur positive et non égale a zéro");
        }
        else{isPdsVisible = true}

        if (isPdsVisible){document.getElementById('pdsD').style.display = 'block';hideError();}
    })

    poids.addEventListener('change',function(){
        const poidsVal = Number(poids.value)
        if (poidsVal <= 0){
            error("Merci d'entrer une valeur positive et non égale à zéro")
        }
        else{
            hideError()
            calculer() 
        }
    })

    /// TO-DO : arround values. Display images for each macarons.
    function calculer() {
        console.log("calculation launched")
        let vitesseVal = Number(vitesse.value);
        let tempsVal = Number(temps.value);
        let poidsVal = Number(poids.value);

        let kcalMN = (vitesseVal * 3.5 * poidsVal) / 200;
        let kcal = kcalMN * tempsVal;

        let macarons = (kcal / 100);

        if (!bool_error) {
            nbKcal.innerHTML = kcal + " Kcal consommées.";
            nbMacarons.innerHTML = macarons + " macarons / calories consommées.";
        }
        else
        {
            nbKcal.innerHTML = null;
            nbMacarons.innerHTML = null;
        }

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