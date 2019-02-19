<?php

class JeuxController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */

           

        //redirection vers index
         
            $meilleur=new JeuxModel();
           $best=$meilleur->meilleurscore();
           // var_dump($best);

          

           return [
            'best' => $best
            

           ]; 



        
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */

            $jeu = $_POST['jeux'];
            $score = $_POST['score'];

           // $jeu = 'snake';
          //  $score = 5;

         //   $http->sendJsonResponse($_POST);


        

            $jeuxmodel= new JeuxModel();

            $jeuxmodel->enrengistrer($_SESSION['user']['userId'], $_SESSION['user']['firstName'], $jeu, $score);


        //     )

/*
           
*/
          

    
    }

}