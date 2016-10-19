<?php

$host = 'melaniecqkkimel.mysql.db';
$db_name = 'melaniecqkkimel';
$user = 'melaniecqkkimel';
$password = 'MC123DBc';


try {
	$db = new PDO ("mysql:dbname=".$db_name.";host=".$host, $user, $password);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
	echo 'Error while connecting : ' . $e->getMessage();
}