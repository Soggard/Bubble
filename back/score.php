<?php

require('config/db.php');
require('config/session.php');

if (isset($_SESSION['pseudo'])) {
	$request = $db->prepare('SELECT pseudo, password FROM app_users WHERE pseudo = :pseudo');

		$request->execute(
			array(
				'pseudo' => $_SESSION['pseudo']
			)
		 );
	echo "true";
}
else {
	echo "false".$pseudo;
	
}
while ($data = $request->fetch() ) {
	$pseudo = $data['pseudo'];
	echo $pseudo;

}
  ?>