<?php
class LoginModel {

public function findWithEmailPassword($email, $password)
    {
        $database = new Database();

        
        $user = $database->queryOne
        (
            "SELECT
                *
            FROM User
            WHERE Email = ?",
            [ $email ]
        );

        
        if(empty($user) == true)
        {
           var_dump('Utilsateur non enrengistré');
        }

            var_dump($user['Password']);
            var_dump($password);


      
    	if($user['Password']==$password)

           
    	{
			var_dump('vous etes connectés'); 
          

			
    		$_SESSION['user']['userId'] = $user['Id'];
    		$_SESSION['user']['firstName'] = $user['FirstName'];
    		$_SESSION['user']['lastName'] = $user['LastName'];
    		$_SESSION['user']['email'] = $user['Email'];
            $_SESSION['user']['Password'] = $user['Password'];
        
    		

    		var_dump($_SESSION);

    	}

    	else{var_dump('Nom ou utilstaeur incorrect');    }

		
    }

}