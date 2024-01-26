function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200, 200, 244);
  // add your drawing code here ...
  fill(200)
  noStroke();
  triangle(width/2 - 45, height/2 - 55, width/2 - 25, height/2 - 40, width/2 - 45, height/2 - 20);
  triangle(width/2 + 45, height/2 - 55, width/2 + 25, height/2 - 40, width/2 + 45, height/2 - 20);
  ellipse(width/2, height/2, 100); // head
  fill("yellow");
  ellipse(width/2 - 20, height/2 - 10, 10); // left eye
  ellipse(width/2 + 20, height/2 - 10, 10); // right eye
  fill("pink");
  triangle(width/2 - 5, height/2, width/2 + 5, height/2, width/2, height/2 + 8); // nose
  stroke(255);
  strokeWeight(2);
  line(width/2 - 10, height/2 + 5, width/2 - 30, height/2); // left top whisker
  line(width/2 + 10, height/2 + 5, width/2 + 30, height/2); // right top whisker
  line(width/2 - 10, height/2 + 5, width/2 - 35, height/2 + 5); // left middle whisker
  line(width/2 + 10, height/2 + 5, width/2 + 35, height/2 + 5); // right middle whisker
  line(width/2 - 10, height/2 + 5, width/2 - 30, height/2 + 10); // left middle whisker
  line(width/2 + 10, height/2 + 5, width/2 + 30, height/2 + 10); // right middle whisker
  noFill();
  arc(width/2 - 10, height/2 + 12, 20, 20, 0, PI); // mouth left
  arc(width/2 + 10, height/2 + 12, 20, 20, 0, PI); // mouth right

}