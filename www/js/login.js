$(document).ready(function() {

	 $("#submit").click(function() { // CONNEXION 	

			$.post(
				'http://melanie-croce.fr/projets/app-bubble-back/login.php', // PAGE PHP SUR LE SERVEUR
				{
					pseudo : $("#pseudo").val(),
					password : $("#password").val()
				},

				function(data){ 
					if (data ="true") {
						// Le membre est connecté. Ajoutons lui un message dans la page HTML.

						$("#resultat").html("<p>Vous avez été connecté avec succès !</p>"+data);
						
						window.location.href = 'affichage.html';
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
						
						
					}
				   else {
						 // Le membre n'a pas été connecté. (data vaut ici "failed")

						 $("#resultat").html("<p>Erreur lors de l'inscription...</p>"+data);
					}
				},				
				'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !

			 );
		 
		 
		});
});
