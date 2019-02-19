// var canvas=document.getElementById('moncanvas');
// var context=canvas.getContext('2d');
/*
var souris= new Image();
souris.src='image/souris.jpg';

  souris.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };*/

 var context = document.getElementById('moncanvas').getContext('2d');




  // function draw() {
 
  // // var img = new Image();
  // // img.onload = function() {
  // context.beginPath();
  // context.lineWidth="2";
  // context.fillStyle='#333';
  // context.arc(100, 100, 10, 0, 2 * Math.PI);
  // context.fillRect(10,10,32,32);
  // context.stroke();
  // context.closePath();

  // };
// }

// function drawRectangle()
// {  


// context.beginPath();
// context.fillStyle='#333';
// context.fillRect(10,10,32,32);
// context.stroke();
// context.closePath();



// }


// drawRectangle();

 // var context = document.getElementById('moncanvas').getContext('2d');
 // context.fillRect(25, 25, 100, 100);
var box=20;

 var snake=[];
 snake[0]={x:9*box,y:10*box};
 // snake[1]={x:8*box,y:10*box};
 // snake[2]={x:7*box,y:10*box};
//  console.log(snake);
//  snake.pop();
// console.log(snake);



  // console.log(snake);


 var food={
 	x:Math.floor(Math.random()*30)*20+10,

 	y:Math.floor(Math.random()*30)*20+10
 }


 
 // var mechant=[];
 // mechant[0]={x:12*box,y:13*box};

 
 


 var score=0;
 
 function draw(){



 	
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


    // for (var i=0; i<mechant.length;i++) {

    // 	context.beginPath();
  		// context.fillStyle="red";
   	// 	context.fillRect(mechant[i].x,mechant[i].y,box,box);
   	// 	context.fill();
   	// 	context.StrokeStyle="black";
   	// 	context.lineWidth="2"
    // 	context.stroke();
    // 	context.closePath();
    // }
      
      

    context.beginPath();
    context.fillStyle="#FF4422";
    context.arc(food.x,food.y, 10, 0, 2 * Math.PI);
    context.fill();
    // context.stroke();
    context.closePath();

     var snakeX=snake[0].x;
     var snakeY=snake[0].y;

    // console.log(snake);

    if(snakeX==food.x-10 && snakeY==food.y-10){

    	score++;
    
    	food.x=Math.floor(Math.random()*30)*20+10;
    	food.y=Math.floor(Math.random()*30)*20+10;
    	
    }

    else{snake.pop();}

     // var taille= snake.length-1;
     // delete(snake.taille.x);
     //  delete(snake.taille.y);

     
    
     // console.log('ici');
     // console.log(snake.pop());

     //  var lastPosition = { x: snake[snake.length-1].x, y: snake[snake.length-1].y };

     // var mechantX=mechant[0].x
     //  var mechantY=mechant[0].y

      

     


      // var aleatoire=Math.floor(Math.random()*4+1);
      // // console.log(aleatoire);

      // if(aleatoire=='1') mechantX-=box;
      // if(aleatoire=='2') mechantY-=box;
      // if(aleatoire=='3') mechantX+=box;
      // if(aleatoire=='4') mechantY+=box;



   



     // if(mechantX>580)
     // {
     //  mechantX-=20;

     // }

     // if(mechantX<20)
     // {
     //  mechantX+=20;

     // }


     // if(mechantY>580)
     // {
     //  mechantY-=20;

     // }

     // if(mechantY<20)
     // {
     //  mechantY+=20;

     // }

     // mechant.pop();

     

  
     


   	 // snake.splice(snake.length-1, 1);

      if(direct=='left') snakeX-=box;
      if(direct=='up') snakeY-=box;
      if(direct=='right') snakeX+=box;
      if(direct=='down') snakeY+=box;



      //  var newmechant={x:mechantX,y:mechantY};
       var newhead={x:snakeX,y:snakeY};

      // mechant.unshift(newmechant);
      snake.unshift(newhead);


          


       // for (var i=0; i<snake.length;i++) {

       // 	  console.log('mechx'+mechant[0].x);
       //    console.log('mechy'+mechant[0].y);
       //    console.log('snakex'+snake[i].x);
       //    console.log('snakey'+snake[i].y);


      // if(mechant[0].x+40==snake[i].x && mechant[0].y+20==snake[i].y)
      // {
          
      // 	 clearInterval(lancement);
      // 	  $('#score').html('<p>Vous avez perdu !</p><p>votre score est de '+score+'</p>');
      // 	  $('#hide').removeClass('hidde');

      	  
      // }
  // }

      if(snakeX>599|| snakeX<0)
      {
       clearInterval(lancement);
       $('#score').html('<p>Vous avez perdu !</p<p>votre score est de '+score+'</p>');
       $('#hide').removeClass('hidde');
      }


       if(snakeY>599|| snakeY<0)
      {
       clearInterval(lancement);
        $('#score').html('<p>Vous avez perdu !</p<p>votre score est de '+score+'</p>');
        $('#hide').removeClass('hidde');
      }

       for (var i=1; i<snake.length;i++) {

      if(snake[0].x==snake[i].x && snake[0].y==snake[i].y)
      {

      	 clearInterval(lancement);
      	  $('#score').html('<p>Vous avez perdu !</p><p>votre score est de '+score+'</p>');
      	  $('#hide').removeClass('hidde');
      }
  }








     
      // snake.splice(0,1,newhead);

      context.fillText(score,10,10);


 }







 
 var lancement=setInterval(draw,200);
 
 

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


// console.log(direct);
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

drawline();