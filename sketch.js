
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
  
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(50, 360, 20,50);
  obstacle=addImage=("obstacle",obstacleImage);
  monkey.setCollider("circle",0,0,20);
  score = 0;
  
}


function draw() {
  background("green");
  text("Score: "+ score, 500,50);
  banana.velocityX = -(4 + 3* score/100)
  score = score + Math.round(getFrameRate()/60);
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
    
    
    monkey.velocityY = trex.velocityY + 0.8
  
    
    spawnObstacles();
    
    if(obstacleGroup.isTouching(monkey)){
        monkey.x=0;
      monkey.y=0;
    }
}

  function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
 }
  }