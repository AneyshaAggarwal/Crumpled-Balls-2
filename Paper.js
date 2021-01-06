class Paper
{
 constructor(x, y, width, height) 
 {
  var options = 
  {
   'isstatic': false,
   'restitution':0.3,
   'friction':0.5,
   'density':1.2
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  this.image = loadImage("paper1.png");

 }

 display()
 {
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  fill("white")
  image(this.image, 0, 0, this.width, this.height);
  pop();
 }

}