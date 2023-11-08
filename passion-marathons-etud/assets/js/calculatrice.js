window.addEventListener("DOMContentLoaded", function()
{
    const vitesse = document.getElementById('vitesse'); // Inputs
    const temps = document.getElementById('temps'); // Inputs
    const poids = document.getElementById('poids'); // Inputs
    const calculer = document.getElementById('calculer'); // Button
    const nbKcal = document.getElementById('nbKcal'); // Div
    const nbMacarons = document.getElementById('nbMacarons'); // Div

    //Calculer lorsque l'utilisateur appuis sur le button...
    calculer.addEventListener('click', function()
    {
        let vitesseVal = Number(vitesse.value);
        let tempsVal = Number(temps.value);
        let poidsVal = Number(poids.value);

        let kcalMN = (vitesseVal * 3.5 * poidsVal) / 200;
        let kcal = kcalMN * tempsVal;

        let macarons = (kcal / 100);

        nbKcal.innerHTML = kcal + " Kcal consommées.";
        nbMacarons.innerHTML = macarons + " macarons / calories consommées.";
    })
})