
var tamagotchi;

function setup()
{
    
    createCanvas(500,500);
    noStroke();
    
    tamagotchi = {

        setup: function(){
            console.log("setup");

        },
        draw: function(){
            console.log("draw");

        }
    }

    tamagotchi.setup();
    
    
}

function draw()
{
    
    background(0,0,0);
    translate(width/2,height/2);
    
    tamagotchi.draw()

}

function mouseDragged()
{
  

}



