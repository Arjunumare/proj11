
function preload(){
  seaImg=loadImage("sea.png")
  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200,400,200)
  sea.addImage(seaImg)
  
  ship=createSprite(200,300,70,70)
  ship.addAnimation("sailing",shipImg)
  ship.scale=0.25
}

function draw() {
  background("blue");
 
  sea.velocityX=-2
  if(sea.x<0){
    sea.x=1600
  }
  
  drawSprites()
}