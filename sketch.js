// console.log('file loaded')

// function setup(){
//     console.log('setup loaded')

//     let c = createCanvas(windowWidth, windowHeight);
//     c.position(0,0)
//     c.style("z-index", 100  );
//     clear()
//     c.style('pointer-events', 'none')
// }

// function draw(){
//     console.log('draw loaded')
//     // background(0)

//     stroke(0);
//     strokeWeight(4);
//     if(mouseIsPressed){
//         line(mouseX, mouseY, pmouseX, pmouseY)
//     }
// }

let brushHue, priorX, priorY, brushWeight, direction;

function setup() {
    // Canvas & color settings
    let c = createCanvas(windowWidth, windowHeight);
    c.position(0, 0)
    c.style("z-index", 100);
    clear()
    c.style('pointer-events', 'none')


    colorMode(HSB, 360, 100, 100);
    brushHue = 0;
    brushWeight = 10;
    strokeWeight(10);
    // background(255, 15, 100);
    rectMode(CENTER);
    direction = true;
}

function draw() {
    if (keyIsDown(87)) {
        chooseColors();
        console.log('w is pressed');
    }

    if (keyIsDown(65)) {
        chooseWidth();
        console.log('a is pressed');
    }

    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}

function chooseColors() {
    brushHue += +1;
    if (brushHue > 359) {
        brushHue = 0;
    }
    stroke(brushHue, 75, 93);
    fill(brushHue, 50, 80);
}

function chooseWidth() {
    if (direction == true) {
        brushWeight += 0.5;
        if (brushWeight > 17) {
            direction = false;
        }
    } else {
        brushWeight -= 0.5;
        if (brushWeight <= 5) {
            direction = true;
        }
    }
    strokeWeight(brushWeight);
}

