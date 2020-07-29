 // physic engine 
 const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
// constructing clases 
const Constraint = Matter.Constraint;

var engine, world; 
// var name 
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;  
// var score function
var Score = 0;
// gamestates for game 
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png"); 
    es();
}

function setup(){ 
    // frame size 
    var canvas = createCanvas(1200,400); 
     // physic engine 
    engine = Engine.create();
    world = engine.world;

     // al var naming and postion
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){  
    // for day and night background change if statement 
    if (backgroundImg){ 
        //background image 
    background(backgroundImg); 
    // for score  
    textSize  (20); 
    fill ("white");
    text ("score"+Score,1000,50); 
// physic engine 
    Engine.update(engine);
    //strokeWeight(4); 
    // all variable display 
    box1.display();
    box2.display();
    ground.display();
    pig1.display(); 
    pig1.score();
    pig3.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display(); 

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
} 
}
// for shoting angry bird 
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

// for going angry bird 
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}    
// functio to change night and day by worldtimeapi.org
async function es () {  
    // link of the website 
    var time =await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata") 
    // saving the data
    var timet = await time.json();  
    // setting the time and date 
    var datetime = timet.datetime 

    
    // hour wise data seting  
     var r = datetime.slice(11,13)  
    // change the background by time   
    if (r>6 && r<17)  {
        bg = "sprites/bg.png"  
         
    } 
    else { 
        bg = "sprites/bg2.jpg" 
        
    } 
backgroundImg= loadImage(bg)

}