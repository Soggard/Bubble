<?php
require('config/db.php');
require('config/session.php');

if (isset($_POST['pseudo']) && !empty($_POST['pseudo']) 
	&& isset($_POST['email']) && !empty($_POST['email'])
    && isset($_POST['password']) && !empty($_POST['password']) ){

    $pseudo = $_POST['pseudo'];
	$email = $_POST['email'];
    $password = $_POST['password'];

    //Requete SQL

    $request = $db->prepare("INSERT INTO app_users VALUES(:pseudo, :email, :password)");
    $request->execute(array(
        ':pseudo' => $pseudo,
		':email' => $email,
        ':password' => $password
    ));

    echo "true";
}
else {
	echo "false";
}

?>