/* -------------------------------
Loading Icons P5 Project
Septian Razi , 2019
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

// Loading Function Index to be played from the loadingFunctions Array
var loadingIndex = 1;


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
  
  // // Slider
  // fill(225)
  // drawSlider(sliderPosX, sliderButtonSize, sliderPosMin, sliderPosMax,sliderFill)


  fill(loadingColour)
  stroke(loadingColour)
  translate(windowWidth/2, windowHeight/2);
 
  loadingFunctions[loadingIndex](globalSpeed);

  //strokeWeight(1)
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
    changeLoadingIcon(loadingIndex+1);
  } else if (key === 'z') {
    changeLoadingIcon(loadingIndex-1);
  } else if (key === 'd') {
    changeToRandomLoadingIcon();
  }

  if (bgOpacity <= 0){
    bgOpacity = 0;
  } else if (bgOpacity > 255){
    bgOpacity = 255;
  }

  console.log("speed = " + globalSpeed + ", opacity = " + bgOpacity)
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
  // if (mouseX > (windowWidth - 2*buttonW - bordebuttonW) && mouseX < (windowWidth - bordebuttonW)) {
  //   if (mouseY > (windowHeight - 2*buttonH - bordebuttonW) && mouseY < (windowHeight - bordebuttonW)) {
  //     changeBackground()
  //   }
  // }
  if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < loadingSize){
    changeBackground()
  }

  // if (dist(mouseX, mouseY, sliderPosX, sliderPosY) < sliderButtonSize) {
  //   sliderFill = 180
  // }
}


// function to change the background of colour
function changeBackground() {
  if (blackBG) {
    bgColour = 0;
    loadingColour = 255;
    blackBG = false
  } else if (!blackBG){
    bgColour = 255;
    loadingColour = 0;
    blackBG = true
  }
}

// function to prepare the change of the loading icon
// param: changeToIndex - loadingIcon index to change to
function changeLoadingIcon(changeToIndex) {

  // if changeToIndex is not valid, exit function
  if (changeToIndex >= loadingFunctions.length || changeToIndex < 0){
    console.log("cannot change to index " + changeToIndex + " as it is out of bounds");
    return
  }    

  background(bgColour);
  loadingIndex = changeToIndex;
  console.log("Changed to " + loadingFunctions[loadingIndex].name)
}

// function to change of the loading icon to a random of the set
function changeToRandomLoadingIcon(){
  var randomIndex = int(random(0, loadingFunctions.length));
  changeLoadingIcon(randomIndex);
}


/* -------------------------------
-----------------------------------
NOTES
-----------------------------------

Things to Consider:
- Hierarchical Modelling
- Slider for Speed and Opacity
----------------------------------*/