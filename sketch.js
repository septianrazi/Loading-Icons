/* -------------------------------
Loading Icons P5 Project
Septian Razi , 2019
----------------------------------*/


var bgColour = 255
var loadingColour = 0
var borderButtonWidth = 10 // border width for bleed
var buttonW = 50
var parameterWidth = buttonW * 1.5
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

// global variables stored inside struct
var global = {
  speed: 10, // speed of the loading animations
  
  index: 20, // Loading Function Index to be played from the loadingFunctions Array

  // background colouring variables
  bgColour: 255,
  loadingColour: 0,
  isBlackBG: true,
  bgOpacity: 100,
  shapeSize: 50,
  moveSize: 70
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

var buttons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // setup global variables (that need some p5-specific stuff)
  bottomYPosition = windowHeight - buttonH - borderButtonWidth;
  sliderPosY = windowHeight - borderButtonWidth - buttonH;

  // setup the buttons by initialising RectButtonWithText class
  colourButton = new RectButtonWithText(global.loadingColour, 0 + buttonW + borderButtonWidth, bottomYPosition, buttonW, buttonH, "Colour", global.bgColour, changeBackground);
  randomButton = new RectButtonWithText(global.loadingColour, 0 + 3*buttonW + 2*borderButtonWidth, bottomYPosition, buttonW, buttonH, 'Random', global.bgColour, changeToRandomLoadingIcon);

  // GUIs for parameter 
  speedParameterGUI = new ParameterEditorGUI('speed', 'speed', global.loadingColour , 0 + parameterWidth + borderButtonWidth, bottomYPosition - 3*buttonH, parameterWidth, global.bgColour);
  opacityParameterGUI = new ParameterEditorGUI('opacity', 'bgOpacity', global.loadingColour, 0 + parameterWidth + borderButtonWidth, bottomYPosition - 6* buttonH, parameterWidth , global.bgColour);
  shapeSizeParameterGUI = new ParameterEditorGUI('shape size', 'shapeSize', global.loadingColour , 0 + parameterWidth + borderButtonWidth, bottomYPosition - 9*buttonH, parameterWidth, global.bgColour);
  moveSizeParameterGUI = new ParameterEditorGUI('movement size', 'moveSize', global.loadingColour , 0 + parameterWidth + borderButtonWidth, bottomYPosition - 12*buttonH, parameterWidth, global.bgColour);

  // Adding buttons to be drawn
  buttons.push(colourButton);
  buttons.push(randomButton);
  buttons.push(speedParameterGUI);
  buttons.push(opacityParameterGUI);
  buttons.push(shapeSizeParameterGUI);
  buttons.push(moveSizeParameterGUI);

}

function draw() {
  background(global.bgColour,global.bgOpacity);
  drawDebugText();

  //Setting some default p5 configurations
  rectMode(RADIUS);
  textAlign(CENTER, CENTER);
  textSize(16);
  strokeWeight(0.5);

  // Drawing all buttons
  buttons.forEach(element => {
    element.draw(global.loadingColour, global.bgColour)
  });

  // // Slider
  // fill(225)
  // drawSlider(sliderPosX, sliderButtonSize, sliderPosMin, sliderPosMax,sliderFill)

  // Displaying actual Loading Icons
  fill(global.loadingColour)
  stroke(global.loadingColour)
  translate(windowWidth/2, windowHeight/2);

  loadingFunctions[global.index](global.speed / 100);

  //strokeWeight(1)
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
  text('speed:\t' + global.speed, borderButtonWidth, borderButtonWidth + 20);
  text('opacity:\t' + global.bgOpacity, borderButtonWidth, borderButtonWidth + 40);
  text('shape size:\t' + global.shapeSize, borderButtonWidth, borderButtonWidth + 60);
  text('movement size:\t' + global.moveSize, borderButtonWidth, borderButtonWidth + 80);

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


//////////////////////////
// EVENTS
//////////////////////////

// function called when a key is pressed
function keyTyped() {
  // keys to alter speed
  if (key === '=') {
    global.speed = global.speed + 2;
  } else if (key === ']') {
    global.speed = global.speed + 0.1;
  } else if (key === '-') {
    global.speed = global.speed - 2;
  } else if (key === '[') {
    global.speed = global.speed - 0.1;
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
    global.shapeSize -= 5;
  } else if (key === 's') {
    global.shapeSize += 5;
  } else if (key === 'd') {
    global.moveSize -= 5;
  } else if (key === 'f') {
    global.moveSize += 5;
  }

  if (global.bgOpacity <= 0){
    global.bgOpacity = 0;
  } else if (global.bgOpacity > 255){
    global.bgOpacity = 255;
  }

  // console.log("speed = " + global.speed + ", opacity = " + global.bgOpacity +
  // ", ShapeSize = " + global.shapeSize + ", MovementSize = " + global.moveSize)
}

// Mouse Pressed Event Listener
function mousePressed() {
  // Check if mouse is inside the circle
  // console.log("mouse pressed")
  
  if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < 50)
    changeBackground();

  // Check for clicks on buttons 
  buttons.forEach(element => {
    element.checkForEvent(mouseX, mouseY)
  });
  
}

///////////////////////////////
// OBJECT CLASSES
//////////////////////////////

// GUI for editing the  global parameters
// Handles the drawing of 4 individual buttons and corresponding parameter text
class ParameterEditorGUI {
  constructor(title, parameter, buttonColour, buttonX, buttonY, buttonD, iconColour) {
    this.title = title;
    this.parameter = parameter;
    
    this.buttonColour = buttonColour;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonD = buttonD;
    this.iconColour = iconColour;

    let offset = buttonD/2;
    let smallButtonSize = buttonD / 5;
    let bigButtonSize = buttonD / 4;

    this.minButtonSmall = new CircularButtonWithIcon(buttonColour, buttonX - offset , buttonY, smallButtonSize, false, iconColour, this.eventDecSmall, this.parameter);
    this.minButtonBig = new CircularButtonWithIcon(buttonColour, buttonX - offset* 1.75, buttonY, bigButtonSize, false, iconColour, this.eventDecBig, this.parameter);
    this.plusButtonSmall = new CircularButtonWithIcon(buttonColour, buttonX + offset , buttonY, smallButtonSize, true, iconColour, this.eventIncSmall, this.parameter);
    this.plusButtonBig = new CircularButtonWithIcon(buttonColour, buttonX + offset * 1.75, buttonY, bigButtonSize, true, iconColour, this.eventIncBig, this.parameter);

  }

  //EVENTS FOR EACH INCREMENTAL BUTTON
  eventIncSmall(parameterName){
    global[parameterName] = global[parameterName] + 1;
  }

  eventIncBig(parameterName){
    global[parameterName] = global[parameterName] + 5;
  }

  eventDecSmall(parameterName){
    global[parameterName] = global[parameterName] - 1;
  }

  eventDecBig(parameterName){
    global[parameterName] = global[parameterName] - 5;
  }
  
  // draw Function to draw the individual buttons and text
  draw(loadingColour, bgColour){

    strokeWeight(0)
    fill(bgColour)
    rect(this.buttonX, this.buttonY, this.buttonD, this.buttonD/2)


    this.minButtonSmall.draw(loadingColour, bgColour);
    this.minButtonBig.draw(loadingColour, bgColour);
    this.plusButtonSmall.draw(loadingColour, bgColour);
    this.plusButtonBig.draw(loadingColour, bgColour);

    this.drawText(loadingColour)
  }

  // draws the value of the global parameter and name of the parameter to edit
  drawText(loadingColour){
    push()

    fill(loadingColour)
    textSize(this.buttonD/4);

    text(this.title, this.buttonX, this.buttonY - this.buttonD/3)

    let parameterVal = Number.parseFloat(global[this.parameter]).toPrecision(3);
    text(parameterVal, this.buttonX, this.buttonY)
    
    pop()
  }

  // function to check if an event is needed to be triggered in this parameterGUI
  checkForEvent(x, y){
    this.minButtonSmall.checkForEvent(x, y);
    this.minButtonBig.checkForEvent(x, y);
    this.plusButtonSmall.checkForEvent(x, y);
    this.plusButtonBig.checkForEvent(x, y);
  }
}


// Class to represent a circular button with
class CircularButtonWithIcon {

  constructor(buttonColour, buttonX, buttonY, buttonD, isPlus, iconColour, eventToTrigger, associatedParameter) {
    this.buttonColour = buttonColour;
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonD = buttonD;
    this.isPlus = isPlus;
    this.iconColour = iconColour;
    this.eventToTrigger = eventToTrigger;
    this.associatedParameter = associatedParameter;

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

    if (dist(x, y, this.buttonX, this.buttonY) <= this.buttonD){
      this.eventToTrigger(this.associatedParameter);
    }
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

/* -------------------------------
-----------------------------------
NOTES
-----------------------------------

Things to Consider:
- Hierarchical Modelling
- Slider for Speed and Opacity
----------------------------------*/