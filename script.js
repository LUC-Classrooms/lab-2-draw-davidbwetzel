var x, y; // declare variables

function setup(){
  createCanvas(600, 400);
  x = 100;
  y = height/2;
}

function draw(){

  // add your drawing code here ...
  x = x + 1;
  if(x > width){
    x = 0;
  }
  if(mouseX > width/2){
    background(255)
  } else {
    background(200, 200, 244);
  }
  
  fill(200)
  noStroke();
  triangle(x - 45, y - 55, x - 25, y - 40, x - 45, y - 20);
  triangle(x + 45, y - 55, x + 25, y - 40, x + 45, y - 20);
  ellipse(x, y, 100); // head
  fill("yellow");
  ellipse(x - 20, y - 10, 10); // left eye
  ellipse(x + 20, y - 10, 10); // right eye
  fill("pink");
  triangle(x - 5, y, x + 5, y, x, y + 8); // nose
  stroke(255);
  strokeWeight(2);
  line(x - 10, y + 5, x - 30, y); // left top whisker
  //stroke("red");
  line(x + 10, y + 5, x + 30, y); // right top whisker
  //stroke("blue");
  line(x - 10, y + 5, x - 35, y + 5); // left middle whisker
  //stroke("green");
  line(x + 10, y + 5, x + 35, y + 5); // right middle whisker
  //stroke("pink");
  line(x - 10, y + 5, x - 30, y + 10); // left middle whisker
  //stroke("yellow");
  line(x + 10, y + 5, x + 30, y + 10); // right middle whisker
  noFill();
  stroke("purple")
  arc(x - 10, y + 12, 20, 20, 0, PI); // mouth left
  arc(x + 10, y + 12, 20, 20, 0, PI); // mouth right

}