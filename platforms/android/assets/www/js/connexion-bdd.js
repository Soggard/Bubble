$(document).ready(function() {
	


	 $("#submit").click(function() { // CONNEXION 	

		 var pseudo = $("#pseudo").val();
			$.post(
				'http://melanie-croce.fr/projets/app-bubble-back/login.php', // PAGE PHP SUR LE SERVEUR
				{
					pseudo : pseudo,
					password : $("#password").val()
				},

				function(data){ 
					if (data ="true") {
						// Le membre est connecté. Ajoutons lui un message dans la page HTML.

						$("#resultat").html("<p>Vous avez été connecté avec succès !</p>"+data);
						
						//window.localStorage.setItem("loggedIn", 1);
						localStorage.setItem("pseudo", pseudo);
						
						window.location.href = 'niv1.html';
						
						
					}
				   else {
						 // Le membre n'a pas été connecté. (data vaut ici "failed")

						 $("#resultat").html("<p>Erreur lors de la connexion...</p>"+data);
					}
				},				
				'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !


			 );
		});


	 $("#register").click(function() { // INSCRIPTION 

			$.post(
				'http://melanie-croce.fr/projets/app-bubble-back/register.php', // PAGE PHP SUR LE SERVEUR
				{
					pseudo : $("#pseudo").val(),
					email : $("#email").val(),
					password : $("#password").val()
				},

				function(data){ 
					if (data ="true") {
						// Le membre est connecté. Ajoutons lui un message dans la page HTML.

						$("#resultat").html("<p>Vous avez été inscrit avec succès !</p>"+data);
						window.location.href = 'index.html';
						
					}
				   else {
						 // Le membre n'a pas été connecté. (data vaut ici "failed")

						 $("#resultat").html("<p>Erreur lors de l'inscription...</p>"+data);
					}
				},				
				'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !

			 );
		 
		 
		});
	
	$("#score_total").click( function() {

	
		
		var score_nv1 = localStorage.getItem("score_niv4");
		 var pseudo = localStorage.getItem("pseudo");
		 console.log(score_nv1, pseudo);
			$.post(
				'http://melanie-croce.fr/projets/app-bubble-back/score.php', // PAGE PHP SUR LE SERVEUR
				{
					score : score,
					pseudo : pseudo
					
				},
				function(data){ 
					if (data) {
						console.log("score envoyé");
						window.location.href = 'highscore.html';
						
						
					}
				   else {
						 console.log("score envoyé");
					}
				},				
				'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !

			 );

	});	
	
});
