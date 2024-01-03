<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Passion Marathons</title>
	<meta charset="utf-8">
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
		<section id="alimentation" >
			<h1 class="title">L'alimentation : le facteur majeur de la performance</h1>
			<nav>
				<p id="before" class="btnSelected">Avant le marathon</p>
				<p id="during">Pendant le marathon</p>
				<p id="after">Après le marathon</p>
				<div class="fantome"></div>
			</nav>
			<article id="avantArticle">
				<h2>Un marathon se prépare longtemps à l'avance ...</h2>
				<p>Un marathon ne se prépare pas une semaine avant la compétition, mais plusieurs mois 
				en amont. En général, quatre mois avant la course, il est prudent d’aller 
				voir un médecin généraliste et d’effectuer une prise de sang, pour vérifier s’il y a des carences 
				ou non.</p>
				<p class="text">La clé d’une alimentation idéale pour préparer 
				un marathon, c’est de consommer tous les groupes d’aliments, pour ne pas créer d’insuffisances 
				ou de carences.  Le corps a besoin, de protéines
				pour construire le muscle, de lipides avec de la bonne matière grasse et de glucides, 
				notamment via les féculents, pour donner de l’énergie au corps.Il faut proscrire à tout prix les aliments transformés, et opter pour des aliments 
				de saison. Par exemple en janvier, on évite les tomates, le melon ou la pastèque, 
				qui vont être importés et un peu dépourvus de leurs nutriments. Il faut plutôt opter 
				pour de la courge ou du poireau. La clé, c’est de respecter la logique de la nature.
				L’hydratation doit également faire l'objet d'une attention particulière. On ne doit s’hydrater qu’avec de l’eau. 
				Quatre mois avant le marathon, il faut donc impérativement diminuer les sodas éventuels, 
				les jus de fruits industriels et les boissons chimiques. »</p>
				<img src="./../assets/images/alimentation/avant.png" alt="Conseils d'alimentation avant un marathon">
			</article>
			<article  style="display:none" id="pendantArticle">
				<h2>Une priorité : boire de l'eau en quantité</h2>
				<p>La prise d’une boisson énergétique est intéressante afin de se réhydrater 
				et de limiter la baisse des stocks de « sucres ». Un minimum de 500mL par heure est à respecter, quantité à augmenter 
				si les conditions atmosphériques sont chaudes, sèches et « ventées » !
				Cette dernière doit être de préférence isotonique (ambiance neutre à froide) 
				ou hypotonique (ambiance neutre à chaude) afin que l’assimilation (donc l’hydratation) 
				soit optimisée et les troubles digestifs minimisés. 
				
				<p class="text">Quant à la question de boire ou manger pendant la course, il est préconisé essentiellement 
				la prise de boisson pour son apport complet en macro et micronutriments. 
				Le solide (barres énergétiques essentiellement) n’est pas « vital » étant donné 
				la durée de l’effort assez courte (inférieure à 5h). Un intermédiaire, le gel énergétique, 
				peut être envisagé mais en appoint de la boisson de l’effort. </p>
				<img src="./../assets/images/alimentation/pendant.jpg" alt="Conseils d'alimentation pendant un marathon">
			</article>
			<article style="display:none" id="apresArticle">
				<h2 >Pour une bonne récupération : manger léger et continuer à bien s'hydrater</h2>
				<p>Que ce soit juste après l’effort ou dans les jours qui suivent, il ne faut  pas hésiter à boire à satiété. Surtout des boissons gazeuses riches en sels minéraux alcalinisants comme le bicarbonate, le potassium ou le magnésium 
				et ajouter du citron pressé (citrate). Et bien sûr, il faut éviter l’alcool au maximum ainsi que les repas trop lourds. Les menus méditerranéens anti-inflammatoires seront privilégiés : poissons, légumes verts, fruits, viande blanche 
				et acides gras essentiels comme les oméga-3 (noix, huile de colza, poissons gras).
				<p>Certains aliments riches en tryptophanes boostent la mélatonine et favorisent le sommeil,
				comme la banane, le saumon, le jambon, le thon, les céréales complètes, les produits laitiers ou 
				les fruits secs qui contiennent cet acide aminé. 
				<p> La consommation de glucides (glucose + fructose) après un effort est particulièrement importante
				pour la réplétion des stocks de glycogène au niveau musculaire (plutôt le glucose) 
				et hépatique (plutôt le fructose). Il en va de même pour la consommation de protéines dont le but est de limiter le catabolisme (« la casse ») et de favoriser l’anabolisme (« la construction ou reconstruction ») des protéines lésées (muscles notamment). Cette consommation doit se faire juste après l’effort et le plus tôt possible. En effet, plus cette consommation est rapide 
				et plus la quantité de resynthèse est importante. On parle souvent de « fenêtre métabolique ».</p>
				<img src="./../assets/images/alimentation/apres.webp" alt="Conseils d'alimentation après un marathon">
			</article>
		</section>
	</div>
	<footer>
		<p>Copyright : Passion Marathons 2015/2023 - contac@passionmarathons.com</p>
		<a href="#">Les auteurs du site </a>
		<a href="#mainBloc">Haut de la page</a>
	</footer>

	<script src="./../assets/js/alimentation.js"></script>
</body>
</html>	 