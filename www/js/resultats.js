$(document).ready(function() {

	$.ajax({
		url: 'http://melanie-croce.fr/projets/app-bubble-back/score.php',
		success: function(data) {
			$("#resultat").append("<p>"+data+"</p>");
 var score = parseInt(localStorage.getItem("score_niv1")) + parseInt(localStorage.getItem("score_niv2")) + parseInt(localStorage.getItem("score_niv3")) + parseInt(localStorage.getItem("score_niv4")) ;
			 var pseudo = localStorage.getItem("pseudo");
			 console.log(score, pseudo);
		},
		error: function() {
			//something went wrong, handle the error and display a message
		}
	});
})