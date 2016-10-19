<?php

require('config/db.php');
require('config/session.php');

/*if (isset($_POST['pseudo']) && !empty($_POST['pseudo'])
  && isset($_POST['password']) && !empty($_POST['password'])){

  session_unset();

$request = $db->prepare('SELECT id, pseudo, password FROM app_users WHERE pseudo = :pseudo');

$request->execute(
  array(
    'pseudo' => $_POST['pseudo']
    )
  );


while ($data = $request->fetch()){

  if ($data['password'] == $_POST['password']){

    $_SESSION['id_user'] = $data['id'];
    $_SESSION['pseudo_user'] = $data['pseudo'];

      }
    }

    $request->CloseCursor();

    echo 'Pseudo et/ou mot de passe incorrects';
  }
  
  */

    $pseudo = "Sdz";
    $password = "salut";

    if( isset($_POST['pseudo']) && isset($_POST['password']) ){

        if($_POST['pseudo'] == $pseudo && $_POST['password'] == $password){ // Si les infos correspondent...
            session_start();
            $_SESSION['user'] = $username;
            echo "Success";        
        }
        else{ // Sinon
            echo "Failed";
        }

    }
  ?>

