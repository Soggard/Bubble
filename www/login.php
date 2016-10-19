<?php

require('config/db.php');
require('config/session.php');

if (isset($_POST['pseudo']) && !empty($_POST['pseudo'])
  && isset($_POST['password']) && !empty($_POST['password'])){

  session_unset();

$request = $db->prepare('SELECT id, pseudo, password FROM author WHERE pseudo = :pseudo');

$request->execute(
  array(
    'pseudo' => $_POST['pseudo']
    )
  );


while ($data = $request->fetch()){

  if ($data['password'] == $_POST['password']){

    $_SESSION['id_user'] = $data['id'];
    $_SESSION['pseudo_user'] = $data['pseudo'];


    header('Location:article.php');
      }
    }

    $request->CloseCursor();

    echo 'Pseudo et/ou mot de passe incorrects';
  }
  ?>

