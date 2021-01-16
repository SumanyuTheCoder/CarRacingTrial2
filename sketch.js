var PlayerCar, PlayerCarImage;
var Road, RoadImage;
var carsound;
var Tcar, TcarImage,redcarT,redcarTimage;
var marrooncarT,marrooncarTimage;
var controlsLeft,controlsLeftImage;
var controlsRight,controlsRightImage;
var McarGroup,M1carGroup,M2carGroup;
var carcrashSound;
var GameOver,GameOverImage,Restart,RestartImage;
var random;

function preload() {
  PlayerCarImage = loadImage(" car yellowT.png");
  RoadImage = loadImage("road3.png");
  carsound = loadSound("Car-Driving-sound-[AudioTrimmer.com].mp3");
  TcarImage = loadImage("brouwn car.png");
redcarTimage = loadImage("car white1.png");
marrooncarTimage = loadImage("marroon car png.png")
controlsLeftImage = loadImage("favpng_media-controls-button.png")
controlsRightImage = loadImage("favpng_media-controls-button (1).png");
carcrashSound = loadSound("Car Crash.wav");
GameOverImage = loadImage("20210114_232510.png");
RestartImage = loadImage("Flat_restart_icon.svg");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
    McarGroup = new Group();
  M1carGroup = new Group();
  M2carGroup = new Group();

  Road = createSprite(200,260);
  Road.addImage(RoadImage);
  Road.scale = 0.7
  Road.velocityY = 6
  Road.x = Road.width / 4

  
  
  PlayerCar = createSprite(215, 330, 20, 20);
  PlayerCar.addImage(PlayerCarImage)
  PlayerCar.scale = 0.1
  carsound.play()
  carsound.loop();
 
  
  controlsLeft = createSprite(100,300);
  controlsLeft.addImage(controlsRightImage)
  controlsLeft.scale = 0.2
  
  controlsLeft = createSprite(350,300);
  controlsLeft.addImage(controlsLeftImage)
  controlsLeft.scale = 0.2;
  
  GameOver = createSprite(220,240)
  GameOver.addImage(GameOverImage);
  GameOver.scale = 0.3;
  GameOver.visible = false;
  
  Restart = createSprite(220,370);
  Restart.addImage(RestartImage);
  Restart.scale = 0.6;
  Restart.visible = false;
}

function draw() {
  background("white")

  
  if (frameCount % 100 === 0) {
    var marrooncarT = createSprite(600);
    marrooncarT.x= Math.round(random(50,400))
    marrooncarT.addImage(marrooncarTimage)
    marrooncarT.velocityY = 2
    marrooncarT.scale = 0.1;
    
  
    McarGroup.add(marrooncarT)

}
  
  if (frameCount % 150 === 0) {
    var redcarT= createSprite()
    redcarT.x= Math.round(random(50,400))
    redcarT.addImage(redcarTimage)
    redcarT.velocityY = 3
    M2carGroup.add(redcarT)
    redcarT.scale = 0.1;
    
}
  
  if (frameCount % 150 === 0) {
    var Tcar = createSprite(600);
    Tcar.x= Math.round(random(50,400));
    Tcar.addImage(TcarImage);
    Tcar.velocityY = 4;
    Tcar.scale = 0.1;
    M1carGroup.add(Tcar)
    Tcar.setCollider("rectangle",0,0);
} 
  


  if (keyWentDown("RIGHT_ARROW")) {
    PlayerCar.velocityX = 4;
  }

  if (keyWentUp("RIGHT_ARROW")) {
    PlayerCar.velocityX = 0;
  }

  if (keyWentDown("LEFT_ARROW")) {
    PlayerCar.velocityX = -4;
  }

  if (touches.lenght>0){
    PlayerCar.velocityX = 0;
    touches = []
  }

  if (Road.y > 400) {
    Road.y = 200
  }

  if (Road.y > 400) {
    Road.y = Road.Witdh / 2
  }
  
 if(PlayerCar.isTouching(McarGroup)){
   PlayerCar.velocityY = 0
   Road.velocityY = 0;
   PlayerCar.destroy();   
   carcrashSound.play();
       GameOver.visible = true
  Restart.visible = true;

   
 }
  
   
 if(PlayerCar.isTouching(M1carGroup)){
    PlayerCar.velocityY = 0
    Road.velocityY = 0;
    PlayerCar.destroy();   
    carcrashSound.play();
    GameOver.visible = true
  Restart.visible = true;

   
 }
   
 if(PlayerCar.isTouching(M2carGroup)){
   PlayerCar.velocityY = 0
   Road.velocityY = 0;
   PlayerCar.destroy();   
   carcrashSound.play();
 GameOver.visible = true;
  Restart.visible = true;

   
 }
    


     
  drawSprites();

}