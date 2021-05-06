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
  
    let x = sin(frameCount * speed) * sizes.movement/2;
    let y = cos(frameCount * speed/2) * sizes.movement;
    circle(x,y, sizes.shape/2);
    
    pop();
  }
  
  // WINDMEEL two Speeds speed 0.5
  function load26(speed) {
    push()
  
    stroke(loadingColour)
    strokeWeight(sizes.shape/20)
  
    fill(loadingColour)
    push()
    rotate(frameCount*speed * 30/4)
    line(-sizes.shape, 0, sizes.shape, 0)
    line(0, -sizes.shape, 0, sizes.shape)
    pop()
    rotate((frameCount*speed * 30/4.1))
    line(-sizes.shape, 0, sizes.shape, 0)
    line(0, -sizes.shape, 0, sizes.shape)

    pop()
  }
  
  //Square size heartbeat duo rotate
  function load25(speed) {
    push()
  
    noStroke()
    rotate(frameCount*speed/3)
  
    change = (sin(frameCount*speed/5)* sizes.movement)
    change2 = (cos(frameCount*speed/5)* sizes.movement)
    rect(-sizes.movement, 0, change, change)
    rect(sizes.movement, 0, change2, change2)
    
  
    pop()
  }
  
  //Circle size heartbeat duo rotate
  function load24(speed) {
    push()
  
    noStroke()
    rotate(frameCount*speed/3)
  
    change = (sin(frameCount*speed/5)* sizes.movement)
    change2 = (cos(frameCount*speed/5)* sizes.movement)
    ellipse(-sizes.movement/2,0,change)
    ellipse(sizes.movement/2,0,change2)
  
    pop()
  }
  
  //Circle size heartbeat
  function load23(speed) {
    push()
  
    change = (sin(frameCount*speed/5)* sizes.movement)
    ellipse(0,0,change)
  
    pop()
  }
  
  //Highway
  function load22(speed) {
    push()
  
    change = (sin(frameCount*speed/5)* sizes.movement)
    change2 = (tan(frameCount*speed/5)* sizes.movement)
    rotate(frameCount*speed/23)
    translate(change, 0)
    translate(0, change2)
    ellipse(0,0,sizes.shape)
  
    pop()
  }
  
  //Floral Pattern
  function load21(speed) {
    push()

    noStroke()
    change = (frameCount*speed)
  
  
    rotate(change/10)
    push()
    translate(sizes.movement,0)
    rotate(change)
    ellipse(0,sizes.shape/3,sizes.shape/3)
  
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
      rect(0,0,sizes.shape + change,sizes.shape+change)
    } else if (change > 3){
      rect(0,0,sizes.shape+change,sizes.shape+change, 3*change, 3*change)
    }
  
    // console.log(change)
    pop()
  }
  
  // TRIPPY WINDMEEL
  function load19(speed){
    push()
    let change = sizes.movement * tan(frameCount*speed)
    //line(-loadingSize+change,0,loadingSize-change,0)
    stroke(loadingColour)
    strokeWeight(sizes.shape/20)

    fill(loadingColour)
    rotate(frameCount*speed * 30/8)
    line(-change, 0, change, 0)
  
    let change2 = sizes.movement * tan(frameCount*speed*2)
    line(0, -change2, 0, change2) 
  
    pop()
  }
  
  // WINDMEEL
  function load18(speed) {
    push()
  
    let change = sizes.movement * tan(cos(frameCount*speed))
    //line(-loadingSize+change,0,loadingSize-change,0)
    stroke(loadingColour)
    strokeWeight(sizes.shape/20)
  
    fill(loadingColour)
    rotate(frameCount*speed * 30/4)
    line(-change, 0, change, 0)
  
    pop()
  }
  
  //CIRCLE SPIRAL LOADING CIRCLE
  function load17(speed) {
    push()
  
    let change = sizes.movement * cos(frameCount*speed)
    //line(-loadingSize+change,0,loadingSize-change,0)
    noStroke()
  
    fill(loadingColour)
    rotate(frameCount*speed*30/4)
    circle(-change, 0, sizes.shape)
    circle(change, 0, sizes.shape)
  
    // bgOpacity = 50
    
    pop()
  }
  
  //CIRCLE SPIRAL LOADING TAN
  function load16(speed) {
    push()
  
    let change = sizes.movement * (1/tan(frameCount*speed))
    //line(-loadingSize+change,0,loadingSize-change,0)
    noStroke()
  
    fill(loadingColour)
    rotate(frameCount*speed*10)
    circle(-change, 0, sizes.shape)
    circle(change, 0, sizes.shape)
    
    pop()
  }
  
  //SQUARE HORIZONTAL SPIN
  function load15(speed) {
    push()
  
    let change = sizes.movement * sin(frameCount * speed)
  
    fill(loadingColour)
    translate(-change, 0)
    rotate(frameCount * speed * 20/15)
    rect(0, 0, sizes.shape, sizes.shape)
    
    pop()
  }

    
  //CIRCLE SPIRAL LOADING
  function load14(speed) {
    push()
  
    noStroke();
    let change = sizes.movement * sin(frameCount * speed)
    //line(-loadingSize+change,0,loadingSize-change,0)
  
    fill(loadingColour)
    rotate(frameCount * (speed *1.33))
    circle(-change, 0, sizes.shape*0.65-change/7)
    circle(change, 0, sizes.shape*0.65-change/7)
  
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
    rect(0,0,sizes.shape+change,sizes.shape+change)

    // console.log(change)
    pop()
  }
    
  
  //PENDULUM
  function load12(speed) {
    push()
  
    noStroke()
    fill(loadingColour,150)
    for (i = 0; i < 7; i++) {
      let c = sizes.movement * sin(frameCount* 1/(speed*sizes.movement+i))
  
      circle(c, 0, sizes.shape - (i*sizes.shape/20) )
    } 
    
    pop()
  }
  
  //CONSISTENT PENDULUM
  function load11(speed) {
    push()
  
    noStroke()
    fill(loadingColour,150)
    for (i = 0; i < 7; i++) {
      let c = sizes.movement * cos(i*5*speed + (frameCount * speed))
      circle(c, 0, sizes.shape + (i*sizes.shape/20) )
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
  
    cSize = sizes.shape/2
    fill(loadingColour,o1)
    circle(-sizes.shape,0,cSize)
    fill(loadingColour,o2)
    circle(0,0,cSize)
    fill(loadingColour,o3)
    circle(sizes.shape,0,cSize)
  
    pop()
  }

  
// NEEDS UPDATING
  function load9(speed) {
    push()
  
    let change = loadingSize * sin(frameCount * speed)
    //line(-loadingSize+change,0,loadingSize-change,0)
  
    fill(loadingColour)
    // rotate(frameCount/15)
    rect(-change, 0, 50-change/10,50-change/10)
    rect(change, 0, 50-change/10,50-change/10)
  
    pop()
  }
  
  //SQUARE PASS THROUGH 
  function load8(speed) {
    push()
  
    let change = sizes.movement * sin(frameCount * speed)
    //line(-loadingSize+change,0,loadingSize-change,0)
  
    fill(loadingColour,215)
    rect(-change, 0, sizes.shape - change/10,sizes.shape-change/10)
    rect(change, 0, sizes.shape-change/10,sizes.shape-change/10)
  
    pop()
  }
  
  //NEEDS UPDATING
  function load7(speed) {
    push()
  
    strokeWeight(5)
    let change = loadingSize * sin(frameCount * speed)
    line(-loadingSize+change,0,loadingSize-change,0)
    
    pop()
  }
  
  //SIN STRAIGHT LINE
  function load6(speed) {
    push()
  
    strokeWeight(sizes.shape/10)
    let change = loadingSize * sin(frameCount * speed)
    line(-loadingSize+change,0,loadingSize-change,0)
    
    pop()
  }
  
  //SIN STRAIGHT LINE BOUNCE
  function load5(speed) {
    push()
  
    strokeWeight(sizes.shape/10)
    let change = sizes.movement * sin(frameCount * speed)
    line(-sizes.movement/2+change, 0, sizes.movement/2-change,0)
    
    pop()
  }
  
  //DOUBLE LINE
  function load4(speed) {
    push()
  
    strokeWeight(5)
    rotate(frameCount * speed);
   
    line(-sizes.shape,-sizes.shape,sizes.shape,sizes.shape)
    
    strokeWeight(5)
    rotate(frameCount * (speed*2/3));
   
    line(-sizes.shape,-sizes.shape,sizes.shape,sizes.shape)
  
    pop()
  }
  
  //SIMPLE LINE
  function load3(speed) {
    push()
  
    strokeWeight(5)
    rotate(speed * frameCount);
   
    line(-sizes.shape,-sizes.shape,sizes.shape,sizes.shape)
    pop()
  }
  
  //SIMPLE TRIANGLE (NOT FINISHED - need to maKE EQUILATERAL)
  function load2(speed) {
    push()
  
    noStroke();
    rotate(speed*frameCount);
    let x1 = 0
    let y1 = 0 - sizes.shape
  
    let x2 = 0 - sizes.shape
    let y2 = sizes.shape
  
    let x3 = sizes.shape
    let y3 = sizes.shape
  
    triangle(x1,y1,x2,y2,x3,y3);
    pop()
  }
  
  // SIMPLE SQUARE
  function load1(speed) {
    push()
  
    noStroke()
    rotate(speed*frameCount);
    rect(0,0, sizes.shape,sizes.shape);
    
    pop()
  }
  
  
  
  // Function meme
  // function loadN(speed) {
  //   push()
    
  //   pop()
  // }