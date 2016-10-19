<?php

$host = 'chekkalhuv1701.mysql.db';
$db_name = 'chekkalhuv1701';
$user = 'chekkalhuv1701';
$password = 'RvK92h3jRBsM';


try {
	$db = new PDO ("mysql:dbname=".$db_name.";host=".$host, $user, $password);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
	echo 'Error while connecting : ' . $e->getMessage();
}