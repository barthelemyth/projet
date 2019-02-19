

var button=document.getElementById('reload');
button.addEventListener('click',recharger);

function recharger() {

document.location.reload(true);

}





var lancement=setInterval(draw,75);



 var context = document.getElementById('moncanvas').getContext('2d');



var box=20;

 var snake=[];
 snake[0]={x:9*box,y:10*box};
 

 var food={
 	x:Math.floor(Math.random()*30)*20+10,

 	y:Math.floor(Math.random()*30)*20+10
 }



 var score=0;
 
 function draw(){

  console.log('je démarre');

 	
 	context.clearRect(0, 0, document.getElementById('moncanvas').width, document.getElementById('moncanvas').height)
 	drawline();
 	for (var i=0; i<snake.length;i++) {

    	context.beginPath();
  		context.fillStyle="#FF4422";
   		context.fillRect(snake[i].x,snake[i].y,box,box);
   		context.fill();
   		context.StrokeStyle="black";
   		context.lineWidth="2"
    	context.stroke();
    	context.closePath();
    }


      
      

    context.beginPath();
    context.fillStyle="#FF4422";
    context.arc(food.x,food.y, 10, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

     var snakeX=snake[0].x;
     var snakeY=snake[0].y;

  

    if(snakeX==food.x-10 && snakeY==food.y-10){

    	score++;
    
    	food.x=Math.floor(Math.random()*30)*20+10;
    	food.y=Math.floor(Math.random()*30)*20+10;
    	
    }

    else{snake.pop();}

     

      if(direct=='left') snakeX-=box;
      if(direct=='up') snakeY-=box;
      if(direct=='right') snakeX+=box;
      if(direct=='down') snakeY+=box;



       var newhead={x:snakeX,y:snakeY};

      snake.unshift(newhead);


          



      if(snakeX>599|| snakeX<0)
      {
       
       clearInterval(lancement);
       $('#score').html('<p>Vous avez perdu !</p<p>votre score est de '+score+'</p>');
       $('#hide').removeClass('hidde');



         var obj={jeux:'snake', score:score};
          
          $.ajax({
            type: "POST",
            url: getRequestUrl()+'/jeux',
            data: obj,
            success: function(response) {
              console.log(response);
            }
          });




      }


       if(snakeY>599|| snakeY<0)
      {
       clearInterval(lancement);
        $('#score').html('<p>Vous avez perdu !</p<p>votre score est de '+score+'</p>');
        $('#hide').removeClass('hidde');

          var obj={jeux:'snake', score:score};
          
          $.ajax({
            type: "POST",
            url: getRequestUrl()+'/jeux',
            data: obj,
            success: function(response) {
              console.log(response);
            }
          });


      }

       for (var i=1; i<snake.length;i++) {

      if(snake[0].x==snake[i].x && snake[0].y==snake[i].y)
      {
      	 clearInterval(lancement);
      	  $('#score').html('<p>Vous avez perdu !</p><p>votre score est de '+score+'</p>');
      	  $('#hide').removeClass('hidde');

          
        var obj={jeux:'snake', score:score};
          
          $.ajax({
            type: "POST",
            url: getRequestUrl()+'/jeux',
            data: obj,
            success: function(response) {
              console.log(response);
            }
          });

      }
  }




      context.fillText(score,10,10);


 }




 

  document.addEventListener('click',arret);


  function arret(){
   clearInterval(lancement);
 

  }



var direct;

document.addEventListener('keydown',direction);

function direction(event){
 if(event.keyCode==37 && direct!='right'){
 	direct='left';
 }

 else if(event.keyCode==38 && direct!='down'){
direct='up'

 }

 else if(event.keyCode==39 && direct!='left'){
direct='right'

 }

  else if(event.keyCode==40 && direct!='up'){
direct='down'

 }



}






function drawline(){
for (var i =0; i <30; i++) {
context.beginPath();
 context.lineWidth = 1;
 context.moveTo(0,i*20);
 context.lineTo(600,i*20);
 context.stroke();


 context.beginPath();
 context.lineWidth = 1;
 context.moveTo(i*20,0);
 context.lineTo(i*20,600);
 context.stroke();
}}
