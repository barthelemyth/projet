<?php

class RegisterController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */
    }

    public function httpPostMethod(Http $http, array $formFields)
    {



   
        $registerModel = new RegisterModel();


        $registerModel->enrengistrer(
                        $_POST['lastName'],
                        $_POST['firstName'],
                        $_POST['email'],
                        $_POST['password']
                    );
       
       


    
}
    }

