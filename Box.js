class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
           restitution:0.08,
          friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        rect(0, 0, this.width, this.height);
        pop();
      }
}
  