
var tamagotchi;

function setup()
{
    
    createCanvas(500,500);
    noStroke();
    
    tamagotchi = {
        points: [],
        size: 100,
        setup: function(){
            var incr = PI * 2/36 ;
            for(var i = 0; i < 36; i++){
                var v = createVector(0, random(0.75, 1));
                var a = incr * i;
                v.rotate(a);
                this.points.push(v);
            }
        },
        draw: function(){
            fill(255);
            beginShape();
            for(var i = 0; i < this.points.length; i++){
                var v = p5.Vector.mult(this.points[i], this.size);
                curveVertex(
                    v.x,
                    v.y
                )
            }
            endShape();
        },
        grow: function(){
            this.size *= random(1, 1.005);
        },
        shrink: function(){
            this.size *=random(1, 0.9995);
            this.size = max(30, this.size);
        }
    }

    tamagotchi.setup();
    
    
}

function draw()
{
    
    background(0,0,0);
    translate(width/2,height/2);
    
    tamagotchi.draw();
    tamagotchi.shrink();

}

function mouseDragged()
{
  tamagotchi.grow()

}



