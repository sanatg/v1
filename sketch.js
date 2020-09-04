var drawing = [];

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
 if (mouseIsPressed) {
   var canva = {
        x:mouseX,
        y:mouseY
   }
   drawing.push(canva);
    }
stroke(255);
strokeWeight(6);
noFill();
beginShape();
   for (var i = 0; i < drawing.length; i++) {
     vertex(drawing[i].x,drawing[i].y);
   }
   endShape();

}
