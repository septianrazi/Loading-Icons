/* -------------------------------
Loading Icons P5 Project
Septian Razi , 2019
----------------------------------*/

/* -------------------------------
Things to Consider:
- Hierarchical Modelling
- Slider for Speed and Opacity
----------------------------------*/


var bgColour = 255
var loadingColour = 0
var bordebuttonW = 10 // border width for bleed
var buttonW = 50
var buttonH = 25
var debug = "Misc"
var blackBG = true
var loadingSize = 150 // Size of Loading animation Icon
var bgOpacity = 100
var loadArray = [] // Array to store different load icon animations

var sliderPosY;
var sliderPosX = 120
var sliderPosMin = 50
var sliderPosMax = 190
var sliderButtonSize = 20
var sliderFill = 150
var globalSpeed = 0.10;

var loadingIndex = 1;
  // Array to store the functions to be loaded
var loadingFunctions = [
  load1, // 1/12
  load2, // 1/12
  load3, // 1/12
  load4,  // 1/20
  load5,  // 1/20
  load6,  // 1/20
  load7,  // 1/20
  load8,  // 1/20
  load9,  // 1/20
  load10, // 1/30
  load11, // 1/20
  load12,
  load13,
  load14, // 1/20   bgOpacity = 50;
  load15, // 1/20   bgOpacity = 80
  load16, //   bgOpacity = 37
  load17,
  load18, //   bgOpacity = 50
  load19, //   bgOpacity = 50
  load20, //
  load21, //
  load22,
  load23,
  load24,
  load25,
  load26, // speed = 0.5
  load27,
  load28,
]


function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderPosY = windowHeight - bordebuttonW - buttonH
}

function draw() {
  background(bgColour,bgOpacity);
  rectMode(RADIUS);
  textAlign(CENTER, CENTER);
  textSize(16);
  strokeWeight(0.5);

  // Button 1
  fill(loadingColour);
  rect(windowWidth - buttonW - bordebuttonW, windowHeight - buttonH - bordebuttonW, buttonW, buttonH, 10);
  fill(bgColour);
  text("Colour", windowWidth - buttonW - bordebuttonW, windowHeight - buttonH - bordebuttonW);

  // Button 2
  fill(loadingColour);
  rect(windowWidth - 3*buttonW - 2*bordebuttonW, windowHeight - buttonH - bordebuttonW, buttonW, buttonH, 10);
  fill(bgColour);
  text(debug, windowWidth - 3*buttonW - 2*bordebuttonW, windowHeight - buttonH - bordebuttonW);
  
  // Mouse Position Text
  fill(150);
  text('x: ' + Math.round(mouseX) + ' y: ' + Math.round(mouseY), 100, 50);
  
  // Slider
  fill(225)
  drawSlider(sliderPosX, sliderButtonSize, sliderPosMin, sliderPosMax,sliderFill)


  fill(loadingColour)
  translate(windowWidth/2, windowHeight/2);
 
  loadingFunctions[loadingIndex](globalSpeed);


  //strokeWeight(1)
}

// function to draw slider
function drawSlider(x, s, min, max, f){
  stroke(loadingColour)
  color(loadingColour)
  line(min, sliderPosY, max, sliderPosY)
  noStroke()
  fill(f)
  circle(x, sliderPosY, s)
  stroke(1)
}

// Mouse Pressed Event Listener
function mousePressed() {
  // Check if mouse is inside the circle
  //rect(windowWidth - buttonW - bordebuttonW, windowHeight - buttonH - bordebuttonW
  if (mouseX > (windowWidth - 2*buttonW - bordebuttonW) && mouseX < (windowWidth - bordebuttonW)) {
    if (mouseY > (windowHeight - 2*buttonH - bordebuttonW) && mouseY < (windowHeight - bordebuttonW)) {
      changeBackground()
    }
  }
  if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < loadingSize){
    changeBackground()
  }

  if (dist(mouseX, mouseY, sliderPosX, sliderPosY) < sliderButtonSize) {
    sliderFill = 180
  }
}

function mouseReleased() {
  sliderFill = 150
}

// function to change the background of colour
function changeBackground() {
  console.log("before" + blackBG)
  if (blackBG) {
    bgColour = 0;
    loadingColour = 255;
    blackBG = false
    console.log("p1")
  } else if (!blackBG){
    console.log("p2")
    bgColour = 255;
    loadingColour = 0;
    blackBG = true
  }
}

// function called when a key is pressed
function keyTyped() {
  // keys to alter speed
  if (key === '=') {
    globalSpeed = globalSpeed + 0.02;
  } else if (key === ']') {
    globalSpeed = globalSpeed + 0.001;
  } else if (key === '-') {
    globalSpeed = globalSpeed - 0.02;
  } else if (key === '[') {
    globalSpeed = globalSpeed - 0.001;
  }
  if (globalSpeed <= 0){
    globalSpeed = 0;
  }


  //keys to alter background opacity
  if (key === 'w') {
    bgOpacity = bgOpacity + 10;
  } else if (key === 'q') {
    bgOpacity = bgOpacity - 10;
  } else if (key === '2') {
    bgOpacity = bgOpacity + 50;
  } else if (key === '1') {
    bgOpacity = bgOpacity - 50;
  } else if (key === 'x') {
    loadingIndex++;
  } else if (key === 'z') {
    loadingIndex--;
  }

  if (bgOpacity <= 0){
    bgOpacity = 0;
  } else if (bgOpacity > 255){
    bgOpacity = 255;
  }

  console.log("speed = " + globalSpeed + ", opacity = " + bgOpacity)
}


