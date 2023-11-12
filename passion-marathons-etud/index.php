<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Passion Marathons</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="./assets/css/style.css" type="text/css" media="all">
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap" rel="stylesheet"> 
	<script src="https://kit.fontawesome.com/620fc58eba.js" crossorigin="anonymous"></script>
</head>
<body>
	<div id="bloc_principal">
		<header>
			<img src="./assets/images/banniere.png" alt="Passion Marathons - Agence spécialisées dans les marathons">
			<p>Aller au bout de soi-même</p>
		</header>
		<nav>
			<a href="index.php">
				<img src="./assets/images/menu/house.svg" alt="Vers l'acceuil">
				Accueil
			</a>
			<a href="./pages/marathons.php">
				<img src="./assets/images/menu/dest.svg" alt="Les marathons dans le monde">
				Marathons
			</a>
			<a href="./pages/alimentation.html">
				<img src="./assets/images/menu/conseils.svg" alt="Conseils pour la préparation d'un marathon">
				conseils
			</a>
			<a href="#">
				<img src="./assets/images/menu/tems.svg" alt="Témoignages de marathoniens">
				Témoignages
			</a>
			<a href="./pages/auteurs.html">
				<img src="./assets/images/menu/nous.svg" alt="Equipe de Passion Marathons">
				L'équipe
			</a>
			<a href="./pages/calculatrice.html">
				<img src="./assets/images/menu/abacus.svg" alt="Calcule le nombre de macarons que tu as dépensé">
				calculette
			</a>
		</nav>
		<section id="alaune">
			<div class="titre_section">
				<h2>À la une</h2>
			</div>
			<img src="./assets/images/home/alaune/new-york.jpg" alt="Ligne d'arrivée du marathon de New York">
			<div>
				<p>By Greg / Juillet 2023</p>
				<p>L'aventure d'une vie</p>
				<a href="#">Lire plus</a>
			</div>
		</section>
		<section id="articles">
			<div class="titre_section">
				<h2>Nos derniers articles</h2>
			</div>
			<div>
				<a href="#">
					<figure>
						<div>
							<img src="./assets/images/home/articles/medoc.jpg" alt="Marathon du Médoc">
						</div>
						<figcaption>
							<h2>Le marathon du médoc</h2>
							<p>Course - France - Nouvelle aquitaine</p>
						</figcaption>
					</figure>
				</a>
				<a href="#">
					<figure>
						<div>
							<img src="./assets/images/home/articles/cognac.jpg" alt="Marathon de Cognac">
						</div>
						<figcaption>
							<h2>le marathon de cognac</h2>
							<p>Course - France - Nouvelle aquitaine</p>
						</figcaption>
					</figure>
				</a>
				<a href="#">
					<figure>
						<div>
							<img src="./assets/images/home/articles/dietetique.jpg" alt="Préparation marathon">
						</div>
						<figcaption>
							<h2>Alimentation avant la course</h2>
							<p>Conseils</p>
						</figcaption>
					</figure>
				</a>
			</div>
		</section>
		<section id="temoignage" >
			<div class="titre_section">
				<h2>Sur la ligne d'arrivée</h2>
			</div>
			<div>
				<blockquote>
					<em>Au départ : une adrénaline de ouf, au 32ème : un coup de barre XXL</em>
				</blockquote>
				<p class="texte_paragraphe"> L’hymne américain retenti, le coup de canon part…la course est lancée.
				A moi New York mais avant il va falloir passer le Verazano Brigde.
				ça grimpe dur mais qu’est ce que c’est beau. Ensuite c’est 42,190 
				dans les 5 quartiers de New York avec du monde (beaucoup de monde) sur le bord de route. 
				L’ambiance est dingue. Les new yorkais sont fous surtout à Brooklyn. 
				Le parcours est compliqué car beaucoup de ligne droite en faut plat montant et les ponts sont de vrais col ! L’arrivée à central Park est grandiose avec du monde mêlés au couleur de l’automne. A noté qu’il y a très peu de nourriture au ravitaillement si ce n’est deux points où ils distribuent des gels. 
				Il faut mieux prévoir ! Sinon il y a à boire tous les miles (1,6km) sauf sur les ponts.</p>
				<img src="./assets/images/home/temoignage/new-york-ligne.jpg" alt="New-York ligne">
			</div>
		</section>
		<section id="instagram">
			<div class="titre_section">
				<h2>Passion Marathons sur Instagram</h2>
			</div>
			<div>
			<?php
        $numbers = array();
        $arraysWidth = sizeof($numbers);
        $html_str = "";

        while ($arraysWidth != 10) {
            $n = random_int(1, 16);
            if (!(in_array($n,$numbers))) {
                array_push($numbers, $n);
                $arraysWidth++;
            }
        } 

        foreach($numbers as $num)
        {
            $html_str .= '<a href="#" style="background-image:url(./assets/images/home/instagram/insta'. $num .'.webp);background-size: cover; background-position: center center; "> </a>';
        }
        echo $html_str;
        ?>
			</div>
			<div>
				<a href="#">
					<i class="fa-brands fa-instagram"></i>
	               	Rejoignez-nous sur Insta
				</a>
			</div>
		</section>
	</div>
	<footer>
		<p>Copyright : Passion Marathons 2015/2023 - contac@passionmarathons.com</p>
		<a href="./pages/auteurs.html">Les auteurs du site </a>
		<a href="#bloc_principal">Haut de la page</a>
	</footer>
</body>
</html>
			
			
				