var thiefImg,policeImg,barrieImg,carImg,holeImg,bgImg
var road,thief,police,wall1,wall2

function preload (){
    thiefImg=loadAnimation("thief1.png","thief3.png","thief2.png")
    policeImg=loadAnimation("cop1.png","cop2.png","cop3.png")
    barrieImg=loadImage("barrie.png")
    carImg=loadImage("car.png")
    holeImg=loadImage("hole.jpg")
    bgImg=loadImage("road.jpeg")
}

function setup(){
    createCanvas(750,500)
    
    road=createSprite(750,220)
    road.addImage(bgImg)
    road.scale=1.2
    road.velocityX=-3

    thief=createSprite(400,450)
    thief.addAnimation("running",thiefImg)

    police=createSprite(200,450)
    police.addAnimation("chasing",policeImg)
    police.scale=0.5

    wall1=createSprite(375,300,750,10)
    wall2=createSprite(375,500,750,10)

    wall1.visible=false
}
function draw(){
    background(0)
    
    if(road.x<0){
        road.x=500
    }

    if(keyDown("up")){
        thief.y -= 10
    }
    if(keyDown("down")){
        thief.y += 10
    }
    thief.collide(wall1)
    thief.collide(wall2)

    if(keyDown("space")){
        thief.velocityY=-15
    }
    thief.velocityY += 0.8
    barriers()
    drawSprites()
}

function barriers(){
    if(frameCount%180===0){
        var ran=Math.round(random(400,500))
        var barrier=createSprite(800,ran)
        barrier.addImage(barrieImg)
        barrier.velocityX=-3
        barrier.scale=0.1
    }
   
}