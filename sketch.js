
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
        draw: function(eyeDirection){
            fill(128,0,128);
            beginShape();
            for(var i = 0; i < this.points.length; i++){
                var v = p5.Vector.mult(this.points[i], this.size);
                curveVertex(
                    v.x,
                    v.y
                )
            }
            endShape();
            /* EYES & PUPILS*/
            fill(255);
            ellipse(this.size * 0.1, 0, this.size * 0.1);
            ellipse(this.size * -0.1, 0, this.size * 0.1);
            fill(0);
            var v = eyeDirection;
            v.mult(this.size * 0.02);
            ellipse(this.size * 0.1 + v.x, v.y, this.size * 0.05);
            ellipse(this.size * -0.1 + v.x, v.y, this.size * 0.05);

        },
        grow: function(){
            this.size *= random(1, 1.005);
            this.size = min(220, this.size);
            var rot = random(-0.01, 0.01);
            for(var i = 0; i < this.points.length; i++){
                this.points[i].rotate(rot);
            }

        },
        shrink: function(){
            this.size *=random(0.9995, 1);
            this.size = max(this.size, 30);
        }
    }

    tamagotchi.setup();
    
    
}

function draw()
{
    
    background(0,0,0);
    translate(width/2,height/2);
    
    var v = createVector(mouseX - width/2, mouseY - height/2);
    v.normalize();
    tamagotchi.draw(v);
    tamagotchi.shrink();

}

function mouseDragged()
{
  tamagotchi.grow();

}



