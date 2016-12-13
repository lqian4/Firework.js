var fireworks = [];
var gravity;
var currentArea="";
var input;
var button;
var greeting;



function setup() {
  createCanvas(400,300);
  colorMode(HSB);
  gravity = createVector(0,0.2);
 
  stroke(255);
  strokeWeight(4);
  background (0);
  
  input = createInput();
  input.position(20, 280);

  button = createButton('submit');
  button.position(155, 281);
  button.mousePressed(greet);
  

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 230);

  textAlign(CENTER);
  textSize(50);

 
  
}

function greet() {
  var name = input.value();
   text('Happy Birthday to'+name+'!');
  input.value('');
  
}

function draw() {
  colorMode(RGB);
  background(0, 0 ,0, 25);
  
  
  fill(255);
  rect(310,270,70,25);
  fill(0);
  stroke(0);
  strokeWeight(0);
  textSize(15);
  text("SAVE",345,287);
  
  if (mouseX >= 310 && mouseX < 380) {
    if (mouseY >= 270 && mouseY < 295){
      //console.log("inside");
      currentArea = "area1";
    }
      else {
         //console.log("outside");
      currentArea = "area2";  
    }
    } 
  
  
  if (random(1) < 0.03) {
   fireworks.push(new Firework()); 
  }
  
  for (var i= fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()){
      fireworks.splice(i,1);
    }
  }
}

function mousePressed(){
  if (currentArea == "area1")
  {saveCanvas(canvas, "myCanvas","jpg");}
  
}