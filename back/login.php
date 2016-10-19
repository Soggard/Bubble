<?php

require('config/db.php');
require('config/session.php');

	if( isset($_POST['pseudo']) && isset($_POST['password']) ){
		$request = $db->prepare('SELECT pseudo, password FROM app_users WHERE pseudo = :pseudo');

		$request->execute(
			array(
				'pseudo' => $_POST['pseudo']
			)
		 );

		while ($data = $request->fetch() ) {
			$pseudo = $data['pseudo'];
			$password = $data['password'];

			if($_POST['pseudo'] == $data['pseudo'] && $_POST['password'] == $data['password']){ // Si les infos correspondent...
				
				$_SESSION['pseudo'] = $data['pseudo'];
				
				
				echo "true";        
			}
			else{ // Sinon
				echo "false";
			}
		}
	}
  ?>

