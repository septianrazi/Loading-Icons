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



var global = {
  
  speed: 0.10, // speed of the loading animations
  
  index: 20, // Loading Function Index to be played from the loadingFunctions Array

  // background colouring variables
  bgColour: 255,
  loadingColour: 0,
  isBlackBG: true,
  bgOpacity: 100
}

// other loading icon variables
var loadingSize = 70       // Size of Loading animation Icon
var sizes = {
  movement: 70,
  shape: 50
}

// Global Access of the buttons used in program
var colourButton;
var randomButton;

var parameterGUI1;

function setup() {
  createCanvas(windowWidth, windowHeight);



  // setup global variables (that need some p5-specific stuff)
  bottomYPosition = windowHeight - buttonH - borderButtonWidth;
  sliderPosY = windowHeight - borderButtonWidth - buttonH;

  // setup the buttons by initialising RectButtonWithText class
  colourButton = new RectButtonWithText(global.loadingColour, 0 + buttonW + borderButtonWidth, bottomYPosition, buttonW, buttonH, "Colour", global.bgColour, changeBackground);
  randomButton = new RectButtonWithText(global.loadingColour, 0 + 3*buttonW + 2*borderButtonWidth, bottomYPosition, buttonW, buttonH, 'Random', global.bgColour, changeToRandomLoadingIcon);

  randomButtonCircle = new CircularButtonWithIcon(global.loadingColour, 100, 100, 30, true, global.bgColour);
  randomButtonCircle2 = new CircularButtonWithIcon(global.loadingColour, 150, 100, 20, false, global.bgColour);

  parameterGUI1 = new ParameterEditorGUI('speed', 'speed', global.loadingColour, 300, 400, 70, global.bgColour);
}

function draw() {
  background(global.bgColour,global.bgOpacity);
  drawDebugText();

  ref = "speed";
  console.log(global[ref])

  rectMode(RADIUS);
  textAlign(CENTER, CENTER);
  textSize(16);
  strokeWeight(0.5);

  // Button 1
  colourButton.draw(global.loadingColour, global.bgColour);

  // Button 2
  randomButton.draw(global.loadingColour, global.bgColour);

  randomButtonCircle.draw(global.loadingColour, global.bgColour);
  randomButtonCircle2.draw(global.loadingColour, global.bgColour);

  parameterGUI1.draw(global.loadingColour, global.bgColour);

  // // Slider
  // fill(225)
  // drawSlider(sliderPosX, sliderButtonSize, sliderPosMin, sliderPosMax,sliderFill)

  fill(global.loadingColour)
  stroke(global.loadingColour)
  translate(windowWidth/2, windowHeight/2);

  loadingFunctions[global.index](global.speed);

  //strokeWeight(1)
}

class ParameterEditorGUI {
  constructor(title, parameter, buttonColour, buttonX, buttonY, buttonD, iconColour) {
    this.title = title;
    this.parameter = parameter;
    
    this.buttonColour = buttonColour;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonD = buttonD;
    this.iconColour = iconColour;

    let offset = buttonD/2.5;
    let smallButtonSize = buttonD / 5;
    let bigButtonSize = buttonD / 4;

    this.minButtonSmall = new CircularButtonWithIcon(buttonColour, buttonX - offset * 2, buttonY, smallButtonSize, false, iconColour, this.testEvent);
    this.minButtonBig = new CircularButtonWithIcon(buttonColour, buttonX - offset, buttonY, bigButtonSize, false, iconColour, this.testEvent);
    this.plusButtonSmall = new CircularButtonWithIcon(buttonColour, buttonX + offset * 2, buttonY, smallButtonSize, true, iconColour, this.testEvent);
    this.plusButtonBig = new CircularButtonWithIcon(buttonColour, buttonX + offset, buttonY, bigButtonSize, true, iconColour, this.testEvent);

  }


  testEvent(){
    console.log("yeet")
  }
  draw(loadingColour, bgColour){
    this.minButtonSmall.draw(loadingColour, bgColour);
    this.minButtonBig.draw(loadingColour, bgColour);
    this.plusButtonSmall.draw(loadingColour, bgColour);
    this.plusButtonBig.draw(loadingColour, bgColour);

    this.drawText(loadingColour)
  }

  drawText(loadingColour){
    push()

    fill(loadingColour)
    textSize(this.buttonD/4);

    text(this.title, this.buttonX, this.buttonY - this.buttonD/3)

    let parameterVal = global[this.parameter];
    text(parameterVal, this.buttonX, this.buttonY)
    
    pop()
  }

  checkForEvent(x, y){
    console.log("he")
    this.minButtonSmall.checkForEvent(x, y);
    this.minButtonBig.checkForEvent(x, y);
    this.plusButtonSmall.checkForEvent(x, y);
    this.plusButtonBig.checkForEvent(x, y);
  }
}
// Class to represent a circular button with
class CircularButtonWithIcon {

  constructor(buttonColour, buttonX, buttonY, buttonD, isPlus, iconColour, eventToTrigger) {
    this.buttonColour = buttonColour;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonD = buttonD;
    this.isPlus = isPlus;
    this.iconColour = iconColour;
    this.eventToTrigger = eventToTrigger;

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

  // finds whether a given position is within the bounds of this button and triggers associated Event
  // param: x and y positions
  // returns true is within, false if outside
  // useful for mouseClicked events
  checkForEvent(x, y) {
    console.log('check');

    if (dist(x, y, this.buttonX, this.buttonY) <= this.buttonD)
      this.eventToTrigger();

    return false;

  }
}

// Class to represent a button with text
class RectButtonWithText {

  constructor(buttonColour, buttonX, buttonY, buttonW, buttonH, inputText, textColour, eventToTrigger) {
    this.buttonColour = buttonColour;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonW = buttonW;
    this.buttonH = buttonH;
    this.inputText = inputText;
    this.textColour = textColour;
    this.eventToTrigger = eventToTrigger;
  }

  // method to draw the actual button given
  // param: buttonColour and textColour (0 - 255 integer)
  draw(buttonColour, textColour) {
    fill(buttonColour);
    rect(this.buttonX, this.buttonY, this.buttonW, this.buttonH, 10);
    fill(textColour);
    text(this.inputText, this.buttonX, this.buttonY);
  }

  // finds whether a given position is within the bounds of this button and triggers associated Event
  // param: x and y positions
  // returns true is within, false if outside
  // useful for mouseClicked events
  checkForEvent(x, y) {
    if (this.buttonX - this.buttonW < x && x < this.buttonX + this.buttonW)
      if (this.buttonY - this.buttonH < y && y < this.buttonY + this.buttonH)
        this.eventToTrigger();

    return false;
  }
}


// function to draw all the debug text on the screen
function drawDebugText() {
  push()
  // background rect so text is still visible even under high opacity
  fill(global.bgColour)
  noStroke()
  rect(0,0, windowWidth/8, windowHeight/5)

  // Text
  fill(150);
  strokeWeight(0);
  textAlign(LEFT, CENTER);
  text('x: ' + Math.round(mouseX) + ' y: ' + Math.round(mouseY), borderButtonWidth, borderButtonWidth);
  text('speed:\t' + global.speed.toFixed(3), borderButtonWidth, borderButtonWidth + 20);
  text('opacity:\t' + global.bgOpacity, borderButtonWidth, borderButtonWidth + 40);
  text('shape size:\t' + sizes.shape, borderButtonWidth, borderButtonWidth + 60);
  text('movement size:\t' + sizes.movement, borderButtonWidth, borderButtonWidth + 80);


  pop()
}

// function to draw slider
function drawSlider(x, s, min, max, f){
  stroke(global.loadingColour)
  color(global.loadingColour)
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
    global.speed = global.speed + 0.02;
  } else if (key === ']') {
    global.speed = global.speed + 0.001;
  } else if (key === '-') {
    global.speed = global.speed - 0.02;
  } else if (key === '[') {
    global.speed = global.speed - 0.001;
  }
  if (global.speed <= 0){
    global.speed = 0;
  }


  //keys to alter background opacity
  if (key === 'w') {
    global.bgOpacity = global.bgOpacity + 10;
  } else if (key === 'q') {
    global.bgOpacity = global.bgOpacity - 10;
  } else if (key === '2') {
    global.bgOpacity = global.bgOpacity + 50;
  } else if (key === '1') {
    global.bgOpacity = global.bgOpacity - 50;
  } else if (key === 'x') {
    changeLoadingIcon(global.index+1);
  } else if (key === 'z') {
    changeLoadingIcon(global.index-1);
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

  if (global.bgOpacity <= 0){
    global.bgOpacity = 0;
  } else if (global.bgOpacity > 255){
    global.bgOpacity = 255;
  }

  console.log("speed = " + global.speed + ", opacity = " + global.bgOpacity +
  ", ShapeSize = " + sizes.shape + ", MovementSize = " + sizes.movement)
}

// Mouse Pressed Event Listener
function mousePressed() {
  // Check if mouse is inside the circle
  console.log("mouse pressed")
  
  if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < sizes.movement)
    changeBackground()

  parameterGUI1.checkForEvent(mouseX, mouseY);

  colourButton.checkForEvent(mouseX, mouseY);
  randomButton.checkForEvent(mouseX, mouseY);


  // if (dist(mouseX, mouseY, sliderPosX, sliderPosY) < sliderButtonSize) {
  //   sliderFill = 180
  // }
}

// function to change the background of colour
function changeBackground() {
  if (global.isBlackBG) {
    global.bgColour = 0;
    global.loadingColour = 255;
    global.isBlackBG = false
  } else if (!global.isBlackBG){
    global.bgColour = 255;
    global.loadingColour = 0;
    global.isBlackBG = true
  }
  background(global.bgColour)
}

// function to prepare the change of the loading icon
// param: changeToIndex - loadingIcon index to change to
function changeLoadingIcon(changeToIndex) {

  // if changeToIndex is not valid, exit function
  if (changeToIndex >= loadingFunctions.length || changeToIndex < 0){
    console.log("cannot change to index " + changeToIndex + " as it is out of bounds");
    return
  }

  background(global.bgColour);
  global.index = changeToIndex;
  console.log("Changed to " + loadingFunctions[global.index].name)
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