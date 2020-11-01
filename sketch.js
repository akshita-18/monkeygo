
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,20,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

  
}


function draw() {
  background(225);
  
  if(ground.x<0)  {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocity = -12;
  }
  monkey.velocitx = monkey.velocitx + 0.8;
  
  monkey.collide(ground); 
  
  drawSprites();
  
}






