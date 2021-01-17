var PLAY = 1;
var END = 0;
var gameState = PLAY;
var mountains,mountainImage,invisibleGround;
var monkey,monkeyImage,arrowGroup,arrow,arrowImage,score = 0;
function preload(){
mountainImage = loadImage("mount.jpg");
monkeyImage = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png"); 
arrowImage = loadImage("arrow0.png");
}


function setup() {
 createCanvas(windowWidth,windowHeight);
  mountains = createSprite(300,80);
   monkeys = [monkey]                       
  mountains.addImage(mountainImage);
  mountains.scale = 4
    mountains.x = windowWidth/1-300;
  invisibleGround = createSprite(10,windowHeight-50,300,20);
  invisibleGround.visible = false;
  monkey = createSprite(50,315,20,20);   
monkey.addAnimation("moving",monkeyImage);
monkey.scale = 0.3;

  
  arrowGroup = createGroup(); 
  
}

function draw() {
background(0);
 
if (gameState === PLAY){
monkey.depth = monkey.depth+1; 
  score = score + Math.round(getFrameRate()/60);
  
mountains.velocityX = -(1 + 3*score/100);
    
    
monkey.velocityY = monkey.velocityY + 0.45




  if(keyDown("up")&& monkey.y >= 307) {
monkey.velocityY = -13;
 }
 
   
 console.log(monkey.y)  
if (mountains.x <300){
mountains.x = windowWidth/1-300;
}
 monkey.velocityY = monkey.velocityY + 0.1 ;


spawnArrows();  

     

 
 }
if(arrowGroup.isTouching(monkey)){
        gameState = END;


    }
  
  else if (gameState === END) {
   

    monkey.addAnimation("moving",monkeyImage);
    
    mountains.velocityX = 0;
    monkey.velocityY = 0;
    arrowGroup.setVelocityXEach(0);
    arrowGroup.setLifetimeEach(-1);
   
    
    
    
  }   
  
  
  


monkey.collide(invisibleGround)
drawSprites(); 
  textSize(50);
  fill("black")
  textFont("algerian")
    text("Score: "+ score, 0,50);
}

function spawnArrows(){
  if(frameCount%120 === 0){
  arrow = createSprite(windowWidth,random(windowHeight-615,windowHeight-100));
arrow.addImage(arrowImage);
 
 arrow.velocityX = -(15 + 3*score/100);  
 arrow.scale = 0.6;
arrow.setCollider("rectangle",0,0,280,50);
arrow.debug =true;
   
   arrowGroup.add(arrow);
  }
}



