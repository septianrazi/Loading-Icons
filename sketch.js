/* -------------------------------
Loading Icons P5 Project
Septian Razi , 2019
----------------------------------*/

// button specific variables
var borderButtonWidth = 20 // border width for bleed
var buttonW = 50
var buttonH = 25
var bottomYPosition; // specifies the bottom of the screen to put our buttons in
var debug = "Misc"
// Buttons used in program
var colourButton;
var randomButton;

// slider variables
var sliderPosY;
var sliderPosX = 120
var sliderPosMin = 50
var sliderPosMax = 190
var sliderButtonSize = 20
var sliderFill = 150

// background colouring variables
var bgColour = 255
var loadingColour = 0
var blackBG = true
var bgOpacity = 100

// other loading icon variables
var loadingSize = 70       // Size of Loading animation Icon
var sizes = {
  movement: 70,
  shape: 50
}
var globalSpeed = 0.10;     // speed of loading animations 

// loading animation selection variables
var loadingIndex = 20; // Loading Function Index to be played from the loadingFunctions Array

// Global Access of the buttons used in program
var colourButton;
var randomButton;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // setup global variables (that need some p5-specific stuff)
  bottomYPosition = windowHeight - buttonH - borderButtonWidth;
  sliderPosY = windowHeight - borderButtonWidth - buttonH;

  // setup the buttons by initialising RectButtonWithText class
  colourButton = new RectButtonWithText(loadingColour, 0 + buttonW + borderButtonWidth, bottomYPosition, buttonW, buttonH, "Colour", bgColour);
  randomButton = new RectButtonWithText(loadingColour, 0 + 3*buttonW + 2*borderButtonWidth, bottomYPosition, buttonW, buttonH, 'Random', bgColour);

  randomButtonCircle = new CircularButtonWithIcon(loadingColour, 100, 100, 30, true, bgColour);
  randomButtonCircle2 = new CircularButtonWithIcon(loadingColour, 150, 100, 20, false, bgColour);

}

function draw() {
  background(bgColour,bgOpacity);
  drawDebugText();


  rectMode(RADIUS);
  textAlign(CENTER, CENTER);
  textSize(16);
  strokeWeight(0.5);

  // Button 1
  colourButton.draw(loadingColour, bgColour);

  // Button 2
  randomButton.draw(loadingColour, bgColour);

  randomButtonCircle.draw(loadingColour, bgColour);
  randomButtonCircle2.draw(loadingColour, bgColour);

  // // Slider
  // fill(225)
  // drawSlider(sliderPosX, sliderButtonSize, sliderPosMin, sliderPosMax,sliderFill)

  fill(loadingColour)
  stroke(loadingColour)
  translate(windowWidth/2, windowHeight/2);
 
  loadingFunctions[loadingIndex](globalSpeed);

  //strokeWeight(1)
}

// Class to represent a circular button with 
class CircularButtonWithIcon {

  constructor(buttonColour, buttonX, buttonY, buttonD, isPlus, iconColour) {
    this.buttonColour = buttonColour;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonD = buttonD;
    this.isPlus = isPlus;
    this.iconColour = iconColour;
  }

  // method to draw the actual button given
  // param: buttonColour and textColour (0 - 255 integer)
  draw(buttonColour, iconColour) {
    fill(buttonColour);
    circle(this.buttonX, this.buttonY, this.buttonD);
    fill(iconColour);

    if (this.isPlus)
      this.drawPlus(iconColour,this.buttonX, this.buttonY, this.buttonD)
    else
      this.drawMin(iconColour,this.buttonX, this.buttonY, this.buttonD)

    // text(this.inputText, this.buttonX, this.buttonY);
  }

  drawPlus(iconColour, buttonX, buttonY, buttonD){
    push()
    var radius = buttonD/2;
    rect(this.buttonX, this.buttonY, radius - radius*0.4, radius/6,  radius/10)
    rect(this.buttonX, this.buttonY, radius/6, radius - radius*0.4,  radius/10)

  }

  drawMin(iconColour, buttonX, buttonY, buttonD){
    var radius = buttonD/2;
    rect(this.buttonX, this.buttonY, radius - radius*0.4, radius/6,  radius/10)
  }

  // finds whether a given position is within the bounds of this button
  // param: x and y positions
  // returns true is within, false if outside
  // useful for mouseClicked events
  checkInBounds(x, y) {
    if (dist(x, y, this.buttonX, this.buttonY) <= this.buttonD)
      return true;
      
    return false;
  }
}

// Class to represent a button with text
class RectButtonWithText {

  constructor(buttonColour, buttonX, buttonY, buttonW, buttonH, inputText, textColour) {
    this.buttonColour = buttonColour;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonW = buttonW;
    this.buttonH = buttonH;
    this.inputText = inputText;
    this.textColour = textColour;
  }

  // method to draw the actual button given
  // param: buttonColour and textColour (0 - 255 integer)
  draw(buttonColour, textColour) {
    fill(buttonColour);
    rect(this.buttonX, this.buttonY, this.buttonW, this.buttonH, 10);
    fill(textColour);
    text(this.inputText, this.buttonX, this.buttonY);
  }

  // finds whether a given position is within the bounds of this button
  // param: x and y positions
  // returns true is within, false if outside
  // useful for mouseClicked events
  checkInBounds(x, y) {
    if (this.buttonX - this.buttonW < x && x < this.buttonX + this.buttonW)
      if (this.buttonY - this.buttonH < y && y < this.buttonY + this.buttonH)
        return true;
      
    return false;
  }
}


// function to draw all the debug text on the screen
function drawDebugText() {
  push()
  // background rect so text is still visible even under high opacity
  fill(bgColour)
  noStroke()
  rect(0,0, windowWidth/8, windowHeight/5)
  
  // Text
  fill(150);
  strokeWeight(0);
  textAlign(LEFT, CENTER);
  text('x: ' + Math.round(mouseX) + ' y: ' + Math.round(mouseY), borderButtonWidth, borderButtonWidth);
  text('speed:\t' + globalSpeed.toFixed(3), borderButtonWidth, borderButtonWidth + 20);
  text('opacity:\t' + bgOpacity, borderButtonWidth, borderButtonWidth + 40);
  text('shape size:\t' + sizes.shape, borderButtonWidth, borderButtonWidth + 60);
  text('movement size:\t' + sizes.movement, borderButtonWidth, borderButtonWidth + 80);


  pop()
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
  } else if (key === 'r') {
    changeToRandomLoadingIcon();
  } else if (key === 'a') {
    sizes.shape -= 5;
  } else if (key === 's') {
    sizes.shape += 5;
  } else if (key === 'd') {
    sizes.movement -= 5;
  } else if (key === 'f') {
    sizes.movement += 5;
  }

  if (bgOpacity <= 0){
    bgOpacity = 0;
  } else if (bgOpacity > 255){
    bgOpacity = 255;
  }

  console.log("speed = " + globalSpeed + ", opacity = " + bgOpacity + 
  ", ShapeSize = " + sizes.shape + ", MovementSize = " + sizes.movement)
}

// Mouse Pressed Event Listener
function mousePressed() {
  // Check if mouse is inside the circle
  if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < loadingSize)
    changeBackground()
  
  if (colourButton.checkInBounds(mouseX, mouseY))
    changeBackground()

  if (randomButton.checkInBounds(mouseX, mouseY))
    changeToRandomLoadingIcon()

  if (colourButton.checkInBounds(mouseX, mouseY))
    console.log("COLOUR BUTTON CLICKED")

  if (randomButton.checkInBounds(mouseX, mouseY))
    console.log("RANDOM BUTTON CLICKED")

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
  background(bgColour)
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