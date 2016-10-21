<?php

require('config/db.php');
require('config/session.php');

	$request = $db->query('SELECT pseudo, score FROM app_score WHERE id = 1');


		while ($data = $request->fetch() ) {
			$pseudo_data = $data['pseudo'];
			$score_data = $data['score'];
			
				if (isset($_POST['score']) && !empty($_POST['score'])
					&& isset($_POST['pseudo']) && !empty($_POST['pseudo'])){
					$pseudo = $_POST['pseudo'];
					$score = $_POST['score'];

					if( $score_data < $score) {
						

						$request2 = $db->prepare('DELETE FROM app_score WHERE id = :id'); 
						// récupère les informations de la table articles
						$request2->execute(
							array(
								'id' => 1
								)
							);
			
						//Requete SQL

						$request1 = $db->prepare('INSERT INTO app_score(pseudo, score) VALUES(:pseudo, :score)');
						$request1->execute(array(
							':pseudo' => $pseudo,
							':score' => $score
						));
						echo $pseudo.' : '.$score.'<br />';
					}
			
				}

			echo $pseudo_data.':'.$score_data.'<br />';
		}
  ?>