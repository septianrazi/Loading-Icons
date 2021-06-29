/* -------------------------------
Loading Icons P5 Project
Septian Razi , 2019
----------------------------------*/

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

////////////////////////////////////////////////
// CODE FOR LOADING ANIMATIONS
////////////////////////////////////////////////

// figure 8 scribble
function load28(speed){
    push();
  
    rotate(frameCount * speed / 5)
    load27(speed);
  
    pop();
  }
  
  // figure 8
  function load27(speed){
    push();
  
    let x = sin(frameCount * speed) * global.moveSize/2;
    let y = cos(frameCount * speed/2) * global.moveSize;
    circle(x,y, global.shapeSize/2);
    
    pop();
  }
  
  // WINDMEEL two Speeds speed 0.5
  function load26(speed) {
    push()
  
    stroke(global.loadingColour)
    strokeWeight(global.shapeSize/20)
  
    fill(global.loadingColour)
    push()
    rotate(frameCount*speed * 30/4)
    line(-global.shapeSize, 0, global.shapeSize, 0)
    line(0, -global.shapeSize, 0, global.shapeSize)
    pop()
    rotate((frameCount*speed * 30/4.1))
    line(-global.shapeSize, 0, global.shapeSize, 0)
    line(0, -global.shapeSize, 0, global.shapeSize)

    pop()
  }
  
  //Square size heartbeat duo rotate
  function load25(speed) {
    push()
  
    noStroke()
    rotate(frameCount*speed/3)
  
    change = (sin(frameCount*speed/5)* global.moveSize)
    change2 = (cos(frameCount*speed/5)* global.moveSize)
    rect(-global.moveSize, 0, change, change)
    rect(global.moveSize, 0, change2, change2)
    
  
    pop()
  }
  
  //Circle size heartbeat duo rotate
  function load24(speed) {
    push()
  
    noStroke()
    rotate(frameCount*speed/3)
  
    change = (sin(frameCount*speed/5)* global.moveSize)
    change2 = (cos(frameCount*speed/5)* global.moveSize)
    ellipse(-global.moveSize/2,0,change)
    ellipse(global.moveSize/2,0,change2)
  
    pop()
  }
  
  //Circle size heartbeat
  function load23(speed) {
    push()
  
    change = (sin(frameCount*speed/5)* global.moveSize)
    ellipse(0,0,change)
  
    pop()
  }
  
  //Highway
  function load22(speed) {
    push()
  
    change = (sin(frameCount*speed/5)* global.moveSize)
    change2 = (tan(frameCount*speed/5)* global.moveSize)
    rotate(frameCount*speed/23)
    translate(change, 0)
    translate(0, change2)
    ellipse(0,0,global.shapeSize)
  
    pop()
  }
  
  //Floral Pattern
  function load21(speed) {
    push()

    noStroke()
    change = (frameCount*speed)
  
  
    rotate(change/10)
    push()
    translate(global.moveSize,0)
    rotate(change)
    ellipse(0,global.shapeSize/3,global.shapeSize/3)
  
    pop()
  }
  
  //Square rev up
  function load20(speed) {
    push()
    // speed = 0.005
    noStroke()
    // bgOpacity = 50
    change = tan(frameCount*speed/10)
    rotate(change)
    if (change < 3){
      rect(0,0,global.shapeSize + change,global.shapeSize+change)
    } else if (change > 3){
      rect(0,0,global.shapeSize+change,global.shapeSize+change, 3*change, 3*change)
    }
  
    // console.log(change)
    pop()
  }
  
  // TRIPPY WINDMEEL
  function load19(speed){
    push()
    let change = global.moveSize * tan(frameCount*speed)

    stroke(global.loadingColour)
    strokeWeight(global.shapeSize/20)

    fill(global.loadingColour)
    rotate(frameCount*speed * 30/8)
    line(-change, 0, change, 0)
  
    let change2 = global.moveSize * tan(frameCount*speed*2)
    line(0, -change2, 0, change2) 
  
    pop()
  }
  
  // WINDMEEL
  function load18(speed) {
    push()
  
    let change = global.moveSize * tan(cos(frameCount*speed))

    stroke(global.loadingColour)
    strokeWeight(global.shapeSize/20)
  
    fill(global.loadingColour)
    rotate(frameCount*speed * 30/4)
    line(-change, 0, change, 0)
  
    pop()
  }
  
  //CIRCLE SPIRAL LOADING CIRCLE
  function load17(speed) {
    push()
  
    let change = global.moveSize * cos(frameCount*speed)

    noStroke()
  
    fill(global.loadingColour)
    rotate(frameCount*speed*30/4)
    circle(-change, 0, global.shapeSize)
    circle(change, 0, global.shapeSize)
  
    // bgOpacity = 50
    
    pop()
  }
  
  //CIRCLE SPIRAL LOADING TAN
  function load16(speed) {
    push()
  
    let change = global.moveSize * (1/tan(frameCount*speed))

    noStroke()
  
    fill(global.loadingColour)
    rotate(frameCount*speed*10)
    circle(-change, 0, global.shapeSize)
    circle(change, 0, global.shapeSize)
    
    pop()
  }
  
  //SQUARE HORIZONTAL SPIN
  function load15(speed) {
    push()
  
    let change = global.moveSize * sin(frameCount * speed)
  
    fill(global.loadingColour)
    translate(-change, 0)
    rotate(frameCount * speed * 20/15)
    rect(0, 0, global.shapeSize, global.shapeSize)
    
    pop()
  }

    
  //CIRCLE SPIRAL LOADING
  function load14(speed) {
    push()
  
    noStroke();
    let change = global.moveSize * sin(frameCount * speed)

  
    fill(global.loadingColour)
    rotate(frameCount * (speed *1.33))
    circle(-change, 0, global.shapeSize*0.65-change/7)
    circle(change, 0, global.shapeSize*0.65-change/7)
  
    pop()
  }

  //Square rev up
  function load13(speed) {
    push()
    // speed = 0.005
    noStroke()
    // bgOpacity = 50
    change = tan(frameCount*speed/10)
    rotate(change)
    rect(0,0,global.shapeSize+change,global.shapeSize+change)

    // console.log(change)
    pop()
  }
    
  
  //PENDULUM
  function load12(speed) {
    push()
  
    noStroke()
    fill(global.loadingColour,150)
    for (i = 0; i < 7; i++) {
      let c = global.moveSize * sin(frameCount* 1/(speed*global.moveSize+i))
  
      circle(c, 0, global.shapeSize - (i*global.shapeSize/20) )
    } 
    
    pop()
  }
  
  //CONSISTENT PENDULUM
  function load11(speed) {
    push()
  
    noStroke()
    fill(global.loadingColour,150)
    for (i = 0; i < 7; i++) {
      let c = global.moveSize * cos(i*5*speed + (frameCount * speed))
      circle(c, 0, global.shapeSize + (i*global.shapeSize/20) )
    }
    
    pop()
  }
  
  //CIRCLE STOP LIGHT
  function load10(speed) {
    push()
  
    noStroke()
    let l = [255,130,130]
    var o1
    var o2
    var o3
    let fc = frameCount * speed
  
    if ((fc % 3) < 1){
      o1 = l[0]
      o2 = l[1]
      o3 = l[2]
    } else if ((fc % 3) < 2){
      o1 = l[2]
      o2 = l[0]
      o3 = l[1]
    } else if ((fc % 3) < 3){
      o1 = l[1]
      o2 = l[2]
      o3 = l[0]
    }
  
    cSize = global.shapeSize/2
    fill(global.loadingColour,o1)
    circle(-global.shapeSize,0,cSize)
    fill(global.loadingColour,o2)
    circle(0,0,cSize)
    fill(global.loadingColour,o3)
    circle(global.shapeSize,0,cSize)
  
    pop()
  }

  
// NEEDS UPDATING
  function load9(speed) {
    push()
  
    let change = global.shapeSize * sin(frameCount * speed)

  
    fill(global.loadingColour)
    // rotate(frameCount/15)
    rect(-change, 0, 50-change/10,50-change/10)
    rect(change, 0, 50-change/10,50-change/10)
  
    pop()
  }
  
  //SQUARE PASS THROUGH 
  function load8(speed) {
    push()
  
    let change = global.moveSize * sin(frameCount * speed)

  
    fill(global.loadingColour,215)
    rect(-change, 0, global.shapeSize - change/10,global.shapeSize-change/10)
    rect(change, 0, global.shapeSize-change/10,global.shapeSize-change/10)
  
    pop()
  }
  
  //NEEDS UPDATING
  function load7(speed) {
    push()
  
    strokeWeight(5)
    let change = global.moveSize * sin(frameCount * speed)
    line(-global.moveSize+change,0,global.moveSize-change,0)
    
    pop()
  }
  
  //SIN STRAIGHT LINE
  function load6(speed) {
    push()
  
    strokeWeight(global.shapeSize/10)
    let change = global.moveSize * sin(frameCount * speed)
    line(-global.moveSize+change,0,global.moveSize-change,0)
    
    pop()
  }
  
  //SIN STRAIGHT LINE BOUNCE
  function load5(speed) {
    push()
  
    strokeWeight(global.shapeSize/10)
    let change = global.moveSize * sin(frameCount * speed)
    line(-global.moveSize/2+change, 0, global.moveSize/2-change,0)
    
    pop()
  }
  
  //DOUBLE LINE
  function load4(speed) {
    push()
  
    strokeWeight(5)
    rotate(frameCount * speed);
   
    line(-global.shapeSize,-global.shapeSize,global.shapeSize,global.shapeSize)
    
    strokeWeight(5)
    rotate(frameCount * (speed*2/3));
   
    line(-global.shapeSize,-global.shapeSize,global.shapeSize,global.shapeSize)
  
    pop()
  }
  
  //SIMPLE LINE
  function load3(speed) {
    push()
  
    strokeWeight(5)
    rotate(speed * frameCount);
   
    line(-global.shapeSize,-global.shapeSize,global.shapeSize,global.shapeSize)
    pop()
  }
  
  //SIMPLE TRIANGLE (NOT FINISHED - need to maKE EQUILATERAL)
  function load2(speed) {
    push()
  
    noStroke();
    rotate(speed*frameCount);
    let x1 = 0
    let y1 = 0 - global.shapeSize
  
    let x2 = 0 - global.shapeSize
    let y2 = global.shapeSize
  
    let x3 = global.shapeSize
    let y3 = global.shapeSize
  
    triangle(x1,y1,x2,y2,x3,y3);
    pop()
  }
  
  // SIMPLE SQUARE
  function load1(speed) {
    push()
  
    noStroke()
    rotate(speed*frameCount);
    rect(0,0, global.shapeSize,global.shapeSize);
    
    pop()
  }
  
  
  
  // Function meme
  // function loadN(speed) {
  //   push()
    
  //   pop()
  // }