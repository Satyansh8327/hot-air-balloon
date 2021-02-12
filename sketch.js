var database , height , balloon 

function preload(){
backgroundimg=loadImage("Hot Air Ballon-01.png")
balloonImage=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png" ,"Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(1500,700);
  database=firebase.database()
  balloon = createSprite(250,250,150,150)
  balloon.addAnimation("hotAirBalloon",balloonImage)
  var balloonHeight=database.ref("balloon/height")
  balloonHeight.on("value",readHeight,showError)
  balloon.scale=0.5
}

function draw() {
  background(backgroundimg); 
  if(keyDown(LEFT_ARROW)){
    updateHeight(-3,0)

  } else

  if(keyDown(RIGHT_ARROW)){
    updateHeight(3,0)
  }else

  
  if(keyDown(DOWN_ARROW)){
    updateHeight(0,3)
  }else

  
  if(keyDown(UP_ARROW)){
    updateHeight(0,-3)
  }
  drawSprites();
}



function updateHeight(x,y){
  database.ref("balloon/height").set({
    'x': height.x+x,
    'y': height.y+y,
  })
}

function readHeight(data){
  height=data.val();
  balloon.x=height.x
  balloon.y=height.y

}

function showError(){
  console.log("error")
}