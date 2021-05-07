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
  
    let x = sin(frameCount * speed) * 50;
    let y = cos(frameCount * speed/2) * 100;
    ellipse(x,y, 25 , 25);
    
    pop();
  }
  
  // WINDMEEL two Speeds speed 0.5
  function load26(speed) {
    push()
  
    // let change = loadingSize * (tan(cos(((frameCount*speed)))))
    //line(-loadingSize+change,0,loadingSize-change,0)
    stroke(loadingColour)
    strokeWeight(10)
  
    fill(loadingColour)
    push()
    rotate(frameCount*speed * 30/4)
    line(-200, 0, 200, 0)
    line(0, -200, 0, 200)
    pop()
    rotate((frameCount*speed * 30/4.1))
    line(-200, 0, 200, 0)
    line(0, -200, 0, 200)
    
    //circle(change, 0, 50)

    pop()
  }
  
  //Square size heartbeat duo rotate
  function load25(speed) {
    push()
  
    noStroke()
    rotate(frameCount*speed/3)
  
    change = (sin(frameCount*speed/5)* 100)
    change2 = (cos(frameCount*speed/5)* 100)
    rect(-100, 0, change, change)
    rect(100, 0, change2, change2)
    
  
    pop()
  }
  
  //Circle size heartbeat duo rotate
  function load24(speed) {
    push()
  
    noStroke()
    rotate(frameCount*speed/3)
  
    change = (sin(frameCount*speed/5)* 100)
    change2 = (cos(frameCount*speed/5)* 100)
    ellipse(-50,0,change)
    ellipse(50,0,change2)
  
    pop()
  }
  
  //Circle size heartbeat
  function load23(speed) {
    push()
  
    change = (sin(frameCount*speed/5)* 100)
    ellipse(0,0,change)
  
    pop()
  }
  
  //Highway
  function load22(speed) {
    push()
  
    change = (sin(frameCount*speed/5)* 50)
    change2 = (tan(frameCount*speed/5)* 50)
    rotate(frameCount*speed/23)
    translate(change, 0)
    translate(0, change2)
    ellipse(0,0,30)
  
    pop()
  }
  
  //Floral Pattern
  function load21(speed) {
    push()
    // speed = 0.005
    noStroke()
    // bgOpacity = 50
    change = (frameCount*speed)
  
  
    rotate(change/10)
    push()
    translate(100,0)
    rotate(change)
    ellipse(0,20,20)
  
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
      rect(0,0,50+change,50+change)
    } else if (change > 3){
      rect(0,0,50+change,50+change, 3*change, 3*change)
    }
  
    // console.log(change)
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
      rect(0,0,50+change,50+change)
    } else if (change > 3){
      rect(0,0,50+change,50+change, 3*change, 3*change)
    }
  
    // console.log(change)
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
    rect(0,0,50+change,50+change)

    // console.log(change)
    pop()
  }
  
  // TRIPPY WINDMEEL
  function load19(speed){
    push()
    let change = loadingSize * ((tan(((frameCount*speed)))))
    //line(-loadingSize+change,0,loadingSize-change,0)
    stroke(loadingColour)
    strokeWeight(5)
  
    fill(loadingColour)
    rotate(frameCount*speed * 30/8)
    line(-change, 0, change, 0)
  
    let change2 = loadingSize * ((tan(((frameCount*speed*2)))))
    line(0, -change2, 0, change2)
    //line(-change2, 0, change2, 0)
    //circle(change, 0, 50)
  
  
    pop()
  }
  
  // WINDMEEL
  function load18(speed) {
    push()
  
    let change = loadingSize * (tan(cos(((frameCount*speed)))))
    //line(-loadingSize+change,0,loadingSize-change,0)
    stroke(loadingColour)
    strokeWeight(5)
  
    fill(loadingColour)
    rotate(frameCount*speed * 30/4)
    line(-change, 0, change, 0)
    
    //circle(change, 0, 50)
  
    pop()
  }
  
  //CIRCLE SPIRAL LOADING CIRCLE
  function load17(speed) {
    push()
  
    let change = loadingSize * (cos(((frameCount*speed))))
    //line(-loadingSize+change,0,loadingSize-change,0)
    noStroke()
  
    fill(loadingColour)
    rotate(frameCount*speed*30/4)
    circle(-change, 0, 50)
    circle(change, 0, 50)
  
    // bgOpacity = 50
    
    pop()
  }
  
  //CIRCLE SPIRAL LOADING TAN
  function load16(speed) {
    push()
  
    let change = loadingSize * (1/tan(((frameCount*speed))))
    //line(-loadingSize+change,0,loadingSize-change,0)
    noStroke()
  
    fill(loadingColour)
    rotate(frameCount*speed*10)
    circle(-change, 0, 50,)
    circle(change, 0, 50)
  
  
    
    pop()
  }
  
  //SQUARE HORIZONTAL SPIN
  function load15(speed) {
    push()
  
    let change = loadingSize * sin(frameCount * speed)
  
    fill(loadingColour)
    translate(-change, 0)
    rotate(frameCount * speed * 20/15)
    rect(0, 0, 50, 50)
    
    pop()
  }
  
  //PENDULUM
  function load12(speed) {
    push()
  
    noStroke()
    fill(loadingColour,150)
    for (i = 0; i < 7; i++) {
      let c = loadingSize * sin(frameCount* 1/(speed*400+i))
      // let c = loadingSize * sin(frameCount/20+i))
      // let c = loadingSize * sin(frameCount*(speed-speed/(i+1)))
  
      circle(c, 0, 50-i*2)
    } 
    
    pop()
  }
  
  //CONSISTENT PENDULUM
  function load11(speed) {
    push()
  
    noStroke()
    fill(loadingColour,150)
    for (i = 0; i < 7; i++) {
      let c = loadingSize * cos(i*8*speed + (frameCount * speed))
      circle(c, 0, 50+i*2)
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
  
    cSize = loadingSize/2
    fill(loadingColour,o1)
    circle(-loadingSize,0,cSize)
    fill(loadingColour,o2)
    circle(0,0,cSize)
    fill(loadingColour,o3)
    circle(loadingSize,0,cSize)
  
    pop()
  }
  
  //CIRCLE SPIRAL LOADING
  function load14(speed) {
    push()
  
    noStroke();
    let change = loadingSize * sin(frameCount * speed)
    //line(-loadingSize+change,0,loadingSize-change,0)
  
    fill(loadingColour)
    rotate(frameCount * (speed *1.33))
    circle(-change, 0, loadingSize*0.65-change/7)
    circle(change, 0, loadingSize*0.65-change/7)
  
    pop()
  }
  
  //SQUARE SPIRAL LOADING
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
  
    let change = loadingSize * sin(frameCount * speed)
    //line(-loadingSize+change,0,loadingSize-change,0)
  
    fill(loadingColour,215)
    rect(-change, 0, 50-change/10,50-change/10)
    rect(change, 0, 50-change/10,50-change/10)
  
    pop()
  }
  
  //SIN STRAIGHT LINE
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
  
    strokeWeight(5)
    let change = loadingSize * sin(frameCount * speed)
    line(-loadingSize+change,0,loadingSize-change,0)
    
    pop()
  }
  
  //SIN STRAIGHT LINE BOUNCE
  function load5(speed) {
    push()
  
    strokeWeight(5)
    let change = loadingSize * sin(frameCount * speed)
    line(-loadingSize/2+change,0,loadingSize/2-change,0)
    
    pop()
  }
  
  //DOUBLE LINE
  function load4(speed) {
    push()
  
    strokeWeight(5)
    rotate(frameCount * speed);
   
    line(-loadingSize,-loadingSize,loadingSize,loadingSize)
    
    strokeWeight(5)
    rotate(frameCount * (speed*2/3));
   
    line(-loadingSize,-loadingSize,loadingSize,loadingSize)
  
    pop()
  }
  
  //SIMPLE LINE
  function load3(speed) {
    push()
  
    strokeWeight(5)
    rotate(speed * frameCount);
   
    line(-loadingSize,-loadingSize,loadingSize,loadingSize)
    pop()
  }
  
  //SIMPLE TRIANGLE (NOT FINISHED - need to maKE EQUILATERAL)
  function load2(speed) {
    push()
  
    noStroke();
    rotate(speed*frameCount);
    let x1 = 0
    let y1 = 0 - loadingSize/2
  
    let x2 = 0 - loadingSize/2
    let y2 = loadingSize/2
  
    let x3 = loadingSize/2
    let y3 = loadingSize/2
  
    triangle(x1,y1,x2,y2,x3,y3);
    pop()
  }
  
  // SIMPLE SQUARE
  function load1(speed) {
    push()
  
    noStroke()
    rotate(speed*frameCount);
    rect(0,0, 70,70);
    
    pop()
  }
  
  
  
  // Function meme
  // function loadN(speed) {
  //   push()
    
  //   pop()
  // }