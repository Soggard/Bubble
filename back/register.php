<?php
//Affiche les erreurs en lien dur
error_reporting(E_ALL);
ini_set('display_errors',1);

//Autorise l'envoie sur un serveur externe
header("Access-Control-Allow-Headers: *");


//Connexion BDD
define('SQL_HOST',       'melaniecqkkimel.mysql.db');
define('SQL_USERNAME',   'melaniecqkkimel');
define('SQL_PASSWORD',   'MC123DBc');
define('SQL_DBNAME',     'melaniecqkkimel');

try {
    $db = new PDO('mysql:bubbledb='.SQL_DBNAME.';host='.SQL_HOST, SQL_USERNAME, SQL_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}

catch(Exception $e) {
    exit('Erreur : ' . $e->getMessage());
}

if (isset($_POST['login']) && !empty($_POST['login'])
    && isset($_POST['password']) && !empty($_POST['password'])){

    $login = $_POST['password'];
    $login = $_POST['password'];

    //Requete SQL

    $sql = "INSERT INTO app_users SET login = :login, password = :password ";
    $request = $db->prepare($sql);
    $request->execute(array(
        ':login' => $_POST["login"],
        ':password' => $_POST["password"],
    ));

    echo "Article ajouté avec succès";
}


//Compatible IONIC
echo $json_response = json_encode($result);

?>