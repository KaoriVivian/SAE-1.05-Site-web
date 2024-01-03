<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Calculatrice de Passions marathons</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="./../assets/css/style.css">
</head>

<body>
	<div id="mainBloc">
		<header>
			<img src="./../assets/images/banniere.png" alt="Passion Marathons - Agence spécialisées dans les marathons">
			<p>Aller au bout de soi-même</p>
		</header>
		<nav>
			<a href="./../index.php">
				<img src="./../assets/images/menu/house.svg" alt="Vers l'acceuil">
				Accueil
			</a>
			<a href="./marathons.php">
				<img src="./../assets/images/menu/dest.svg" alt="Les marathons dans le monde">
				Marathons
			</a>
			<a href="./alimentation.php">
				<img src="./../assets/images/menu/conseils.svg" alt="Conseils pour la préparation d'un marathon">
				conseils
			</a>
			<a href="./../index.php#temoignage">
				<img src="./../assets/images/menu/tems.svg" alt="Témoignages de marathoniens">
				Témoignages
			</a>
			<a href="./auteurs.php">
				<img src="./../assets/images/menu/nous.svg" alt="Equipe de Passion Marathons">
				L'équipe
			</a>
			<a href="./calculatrice.php">
				<img src="./../assets/images/menu/abacus.svg" alt="Calcule le nombre de macarons que tu as dépensé">
				calculette
			</a>
		</nav>
		<div class="titre_section">
			<h2 class='title'>La calculatrice de Passion Marathons</h2>
		</div>
		<div id="calculatorGoals">
			<blockquote class="title">
				Un Objectif : Votre Santé
			</blockquote>
			<p class="text">
				Chez passions marathons nous pensons qu'il est indispensable d'avoir un suivi de santé le plus fiable
				possible.
				C'est pour cela que nous avons mis en place <strong>une calculatrice</strong> pour mesurer combien de
				kCal vous
				avez dépensé durant un marathon ou n'importe quelle course. Nous avons aussi pris la liberté d'ajouter
				un peu
				de gourmandise à cette calculatrice ! En effet, un calcul en marcarons dépensés sera aussi effectué,
				plus vous aurez
				consommés de macarons, plus des petites images rigolotes seront visibles. Alors dépensez vous le plus
				possible
				pour que vous ayez les plus beaux macarons disponibles !
			</p>
			<p class="text">Le fonctionnement de la calculatrice est simple, vous n'avez qu'à entrer la vitesse moyenne de votre
				course, le temps que vous avez pris et votre poids et le calcul se fera automatiquement ! </p>

			<br>

			<button id="btnStart" class="text">Commencer</button>
		</div>

		<div id="calculatorBody" style="display: none;">
			<div id="spdD">
				<p class="text">Vitesse: </p>
				<input type="text" id="speed" placeholder="Vitesse en Km/h...">
			</div>
			<div id="timeD" style="display: none;">
				<p class="text">Temps (Minutes): </p>
				<input type="text" id="time" placeholder="Temps en Min...">
			</div>
			<div id="wgtD" style="display: none;">
				<p class="text">Poids (Kg): </p>
				<input type="text" id="weight" placeholder="Poids en Kg...">
			</div>
		</div>


		<br>
		<img src="./../assets/images/technique/noice-nice.gif" alt="Nice Weight" style="display: none;" id="nice">
		<div id="nbKcal"></div>
		<div id="nbMacarons"></div>
		<div style="color: red;" id="error_indicator"></div>

	</div>

	<footer>
		<p>Copyright : Passion Marathons 2015/2023 - contac@passionmarathons.com</p>
		<a href="./pages/auteurs.html">Les auteurs du site </a>
		<a href="#bloc_principal">Haut de la page</a>
	</footer>

	<script src="./../assets/js/calculatrice.js"></script>
</body>

</html>