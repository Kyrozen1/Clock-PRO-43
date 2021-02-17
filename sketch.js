var hr;
var min;
var sec;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  
  
}

function draw() {
  background(0); 

  translate(200,200)
  rotate(-90)
  hr = hour();
  min = minute();
  sec = second();
  
  push(); 
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push(); 
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push(); 
  rotate(secAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  translate(hr,min,sec)
  angleMode(DEGREES);
  hrAngle = map(hr, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);
  
  stroke(0,0,255)
  noFill()
  strokeWeight(10)
  arc(-10,-50,280,280,0,secAngle)

  stroke(0,255,0)
  noFill()
  strokeWeight(10)
  arc(-10,-50,310,310,0,minAngle)

  stroke(255,0,0)
  noFill()
  strokeWeight(10)
  arc(-10,-50,340,340,0,hrAngle)


  drawSprites();
}