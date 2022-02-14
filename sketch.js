var boy,boy_running,boy_collided
var groundImage
var invisibleGround
var bird_flying
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4


function preload(){
groundImage=loadImage("ground.jpg")

boy_running=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png")

bird_flying=loadImage("bird.png")

obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
}


function setup(){
  createCanvas(420,200)

ground=createSprite(210,100,600,10)
ground.addImage("ground",groundImage)
ground.velocityX=-2

boy=createSprite(50,140,20,40)
boy.addAnimation("running",boy_running)
boy.scale=0.1


invisibleGround=createSprite(210,160,420,10)
invisibleGround.visible=false

obstaclesGroup = new Group()

}


function draw(){
background(180)

boy.collide(invisibleGround)


if(keyDown("space")&& boy.y >= 120){
boy.velocityY=-7
}

boy.velocityY=boy.velocityY +0.7

if(ground.x<0){
  ground.x=ground.width/2
}
spawnobstacles
spawnBirds()
drawSprites()


function spawnBirds(){
  if(frameCount%500===0){
bird=createSprite(300,40,20,10)
bird.addImage("flying",bird_flying)
bird.scale=0.1
bird.velocityX=-2
bird.lifetime = 135
bird.y=Math.round(random(10,40))
  }
 
}
}
function spawnobstacles(){
if(frameCount%70===0){
  var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6;

    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;

}
obstacle.scale = 0.5;
obstacle.lifetime = 300;

obstaclesGroup.add(obstacle)
}
}