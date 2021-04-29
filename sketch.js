
 var egg;

 var eggImg, basketImg, basket2Img;

 var basketGroup, invisibleBasketGroup
 var edge;
 var gameState="PLAY";

 var canvasCounter=-1;
 var canvasHeight = 0;

 function preload(){
   //loading Images
  basketImg= loadImage("basket.png")
  basket2Img= loadImage("basket2.png")

 }
 function setup(){

  createCanvas(400,800);
  leftEdge  =createSprite(10,0,5,1200);
  rightEdge  =createSprite(400,0,5,1200)
  egg = createSprite(200,700,40,40);
  egg.shapeColor = "red"

  basketGroup = new Group();
  invisibleBasketGroup= new Group();
  createBasket()


 }
 function draw(){

 
  console.log(canvasCounter+","+canvasHeight+","+egg.y)
  basketGroup.bounceOff(leftEdge);
  basketGroup.bounceOff(rightEdge);

  invisibleBasketGroup.bounceOff(leftEdge);
  invisibleBasketGroup.bounceOff(rightEdge);

if(gameState === "PLAY"){
   background("lightblue");
   drawSprites();

   camera.position.y = egg.y;


  // if(egg.isTouching(invisibleBasketGroup) || egg.y>=800){
  //   egg.setVelocity(0,0)
  //   gameState = "END";
   
  // }

   //adding gravity
   egg.velocityY=egg.velocityY+0.5;

   //making egg jump when you press space

   if(keyDown("space")){
     egg.velocityY=-7

   }

  // egg.collide(basketGroup);

   if(egg.y<height/2 && canvasCounter === -1){
    // basketGroup.destroyEach();
     canvasCounter++;
      createNewBaskets(canvasCounter);
      leftEdge.height=leftEdge.height+800;
      rightEdge.height = rightEdge.height+800;
   }
   else if(egg.y<canvasHeight){
   
     // basketGroup.destroyEach();
    
     canvasCounter++;
     canvasHeight = - (400 * (canvasCounter+1))
      createNewBaskets(canvasCounter);
      leftEdge.height=leftEdge.height+800;
      rightEdge.height = rightEdge.height+800;
   }
  
   }
   else if(gameState === "END"){
      background("black");
      textSize(20);
      fill("blue")
      text("Press R to restart",150,egg.y-200);
      egg.x=200;
      egg.y=700;
      egg.velocityY=0;
      if(keyDown("r")){
        gameState="PLAY";
        
      }
   }
  // console.log(egg.x+","+gameState)


 }
 function createBasket(){

    var basket1 = createSprite(random(0,400), 600,100,20)
    var basket2 = createSprite(random(0,400), basket1.y-200,100,20)
    var basket3 = createSprite(random(0,400), basket2.y-100,100,20)
    var basket4 = createSprite(random(0,400), basket3.y-200,100,20)

    var basket1Invisible = createSprite(basket1.x, basket1.y+15,100,20)
    var basket2Invisible = createSprite(basket2.x, basket2.y+15,100,20)
    var basket3Invisible = createSprite(basket3.x, basket3.y+15,100,20)
    var basket4Invisible = createSprite(basket4.x, basket4.y+15,100,20)

    basketGroup.add(basket1)
    basketGroup.add(basket2)
    basketGroup.add(basket3)
    basketGroup.add(basket4)

    basketGroup.setVelocityXEach(-3);
    
    invisibleBasketGroup.add(basket1Invisible)
    invisibleBasketGroup.add(basket2Invisible)
    invisibleBasketGroup.add(basket3Invisible)
    invisibleBasketGroup.add(basket4Invisible)

    invisibleBasketGroup.setVelocityXEach(-3);
    invisibleBasketGroup.setColorEach("red");
    invisibleBasketGroup.setVisibleEach(false)



 }

 function createNewBaskets(canvasCounter){

  position = -(canvasCounter*800) -200;
  //console.log(position)
  var basket1 = createSprite(random(100,200), position,100,20)
  var basket2 = createSprite(random(100,200), basket1.y-200,100,20)
  var basket3 = createSprite(random(100,200), basket2.y-100,100,20)
  var basket4 = createSprite(random(100,200), basket3.y-200,100,20)

  var basket1Invisible = createSprite(basket1.x, basket1.y+15,100,20)
  var basket2Invisible = createSprite(basket2.x, basket2.y+15,100,20)
  var basket3Invisible = createSprite(basket3.x, basket3.y+15,100,20)
  var basket4Invisible = createSprite(basket4.x, basket4.y+15,100,20)

  basketGroup.add(basket1)
  basketGroup.add(basket2)
  basketGroup.add(basket3)
  basketGroup.add(basket4)
  //console.log(basketGroup.length)

  basketGroup.setVelocityXEach(-3);
  
  invisibleBasketGroup.add(basket1Invisible)
  invisibleBasketGroup.add(basket2Invisible)
  invisibleBasketGroup.add(basket3Invisible)
  invisibleBasketGroup.add(basket4Invisible)

  invisibleBasketGroup.setVelocityXEach(-3);
  invisibleBasketGroup.setColorEach("red");
  invisibleBasketGroup.setVisibleEach(false)

  basketGroup.bounceOff(leftEdge);
  basketGroup.bounceOff(rightEdge);

  invisibleBasketGroup.bounceOff(leftEdge);
  invisibleBasketGroup.bounceOff(rightEdge);

 }