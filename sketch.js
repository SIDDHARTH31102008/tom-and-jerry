var cat,mouse,bg
var cat1,cat2,cat3;
var mouse1,mouse2,mouse3;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
cat1=loadAnimation("images/cat1.png");
cat2=loadAnimation("images/cat2.png","images/cat3.png");
cat3=loadAnimation("images/cat4.png");
mouse1=loadAnimation("images/mouse1.png");
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3=loadAnimation("images/mouse4.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(900,600);
    mouse=createSprite(200,600);
    cat.addAnimation("cat1",cat1);
    cat.scale=0.2;
    mouse.addAnimation("mouse1",mouse1);
    mouse.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2+mouse.width/2){
    cat.velocityX=0;
    cat.addAnimation("cat3",cat3);
  // cat.x=300;
    cat.changeAnimation("cat3");
    mouse.addAnimation("mouse3",mouse3);
    mouse.changeAnimation("mouse3");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("cat2",cat2);
cat.changeAnimation("cat2");
mouse.addAnimation("mouse2",mouse2);
mouse.frameDelay=25;
mouse.changeAnimation("mouse2");

}

}
