$(document).ready(function() {

	$.ajax({
		url: 'http://melanie-croce.fr/projets/app-bubble-back/score.php',
		success: function(data) {
			 var score = parseInt(localStorage.getItem("score_niv1")) + parseInt(localStorage.getItem("score_niv2")) + parseInt(localStorage.getItem("score_niv3")) + parseInt(localStorage.getItem("score_niv4")) ;
			 var pseudo = localStorage.getItem("pseudo");
			 $("#resultat").append("<h2>Bravo ! Tu as termin&eacute; l'aventure compl&egrave;te !</h2>");
			 $("#resultat").append("<h3>Tu as fait un score total de "+score+" points ! Bravo !</h2>");
			 $("#resultat").append("<h4>Record mondiale : "+data+"</h2>");
		},
		error: function() {
			//something went wrong, handle the error and display a message
		}
	});
})