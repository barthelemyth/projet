<?php

class JeuxModel{

	


	public function enrengistrer($id,$prenom,$game,$score){

			$database = new Database();

       

		
		
		$sql = 'INSERT INTO Result (Id,
									FirstName,
									Game,
									Score)
									
				VALUES (?, ?, ?, ?)';

		$values = [$id,$prenom,$game,$score];

		$database->executeSql($sql, $values);



	}


	public function meilleurscore(){

		$database = new Database();

        
        $user = $database->query
        (
            "SELECT
                *
            FROM Result
            ORDER BY Score DESC
            ",
            []
        );

        return $user;
	}
}