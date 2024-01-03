<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Passion Marathons</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="./../assets/css/style.css" type="text/css" media="all">
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap" rel="stylesheet"> 
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
			<a href="./alimentation.html">
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
			<a href="./calculatrice.html">
				<img src="./../assets/images/menu/abacus.svg" alt="Calcule le nombre de macarons que tu as dépensé">
				calculette
			</a>
		</nav>
		
		<div id="marathonList">
			<h1 class="titleList">Marathons 2024</h1>
			<table>
				<thead>
					<tr><th>Date<th>Marathon<th>Ville
				</thead>
				<tbody>
					<?php
					$leFichier = fopen("../assets/datas/marathons.txt", "r");
					while(! feof($leFichier))
					{
						$ligne = fgets($leFichier, 250);
						$tableau = explode(";", $ligne);
						echo "<tr><td>". $tableau[0] ."<td>". $tableau[1] ."<td>". $tableau[2];
					}
					?>
				</tbody>
			</table>
		</div>
	</div>
	<footer>
		<p>Copyright : Passion Marathons 2015/2023 - contac@passionmarathons.com</p>
		<a href="#">Les auteurs du site </a>
		<a href="#mainBloc">Haut de la page</a>
	</footer>
</body>
</html>