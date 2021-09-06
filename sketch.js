var garden,rabbit;
var gardenImg,rabbitImg;
var fruit, fruitImage;
var grass, grassImage;
var grass2,grassImage2;
var red, redImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  fruitImage = loadImage("apple.png")
  grassImage = loadImage("grass.png")
  grassImage2 = loadImage("grass.png")
  redImage = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,450,30,30);
rabbit.scale =0.11;
rabbit.addImage(rabbitImg);

grass = createSprite(88,360,20,20)
grass.addImage(grassImage)
grass.scale = 0.1

grass2 = createSprite(312,360,20,20)
grass2.addImage(grassImage2)
grass2.scale = 0.1
}


function draw() {
  background(0);

  if (keyDown("right")) {
    rabbit.x = rabbit.x+10
  }

  if (keyDown("left")) {
    rabbit.x = rabbit.x-10
  }

   edges= createEdgeSprites();
  rabbit.collide(edges);
 

 

 console.log(grass.x)
 console.log(rabbit.x)
 grass.depth = rabbit.depth
 grass.depth = grass.depth+1

 console.log(grass2.x)
 console.log(rabbit.x)
 grass2.depth = rabbit.depth
 grass2.depth = grass2.depth+1

  spawnFruit()
  spawnRed()

  drawSprites();
}

function spawnFruit(){

  if (frameCount %100 === 0) {
    fruit = createSprite(random(50,350),40,10,10)
    fruit.addImage(fruitImage)
  fruit.velocityY = 3
  fruit.scale =  0.06



  console.log(fruit.y)
  console.log(rabbit.x)

  fruit.depth = rabbit.depth
  rabbit.depth = rabbit.depth+1
  }

  
}


function spawnRed() {
  if (frameCount %80 === 0) {
    red = createSprite(random(50,350),40,20,20)
    red.velocityY = 4
    red.addImage(redImage)
    red.scale = 0.06
    console.log(red.y)
    console.log(rabbit.x)

    red.depth = rabbit.depth
    rabbit.depth = rabbit.depth+1
  }
 
}





