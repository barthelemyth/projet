<?php


class RegisterModel {

    //méthode d'enregistrement utilisateur
	public function enrengistrer( $lastname, $firstname, $email, $password) {

        // instaciation de la librairie database

		$database = new Database();

        // il faut hasher le mot de pass pour des raisons de sécurité

		
		
		$sql = 'INSERT INTO User (  LastName,
									FirstName,
									Email,
									Password)
									
				VALUES (?, ?, ?, ?)';

		$values = [$lastname, $firstname, $email, $password];

		$database->executeSql($sql, $values);


	}

}






	
