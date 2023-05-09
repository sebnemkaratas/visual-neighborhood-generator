function setup() {
    createCanvas(1000, 1000);
    yollar()
      
    for (let i = 0; i  77; i++) {
    agac(Math.floor(Math.random()  1000), Math.floor(Math.random()  290))
  }
  
    for (let i = 0; i  2; i++) {
    apartman(#f4f1de,#e07a5f, Math.floor(Math.random()  1000), 190 ) 
  }
       for (let i = 0; i  2; i++) {
     apartman(#eae2ba,#7ea310, Math.floor(Math.random()  1000), 190 ) 
  }
  
     for (let i = 0; i  2; i++) {
    apartman(#f4c095,#1d7874, Math.floor(Math.random()  1000), 208 ) 
  }
       for (let i = 0; i  2; i++) {
   apartman(#efffff,#886eaa, Math.floor(Math.random()  1000), 208 ) 
  }
  
    
  }
  function apartman(renk, cati, x, y){
    
    fill(renk);
    rect(x+0, y+0, 150, 100);
    
    fill(cati);
    rect(x+105, y+60, 30, 40);
    
    fill(cati);
    triangle(x+74, y+-90, x+-16, y+0, x+163, y+0);
    
    fill(233, 233,  245);
    ellipse(x+125, y+84, 11, 11);
  }
  
  
  function karatasApartmani(){
    
    fill(233, 233,  245,);
    quad(11, 155, 188, 155, 188, 288, 11, 288); 
    
    fill(106,140,166);
    quad(122, 222, 177, 222, 177, 288, 122, 288);
    
    fill(106,140,166);
    triangle(99, 66, 11, 155, 188, 155);
    
    fill(233, 233,  245,);
    ellipse(166, 260, 11, 11);
  }
  
  function ertenApartmani(){
    fill(243, 244, 203);
    quad(267, 155, 444, 155, 444, 288, 267, 288); 
    
    fill(113,166,106);
    quad(280, 222, 335, 222, 335, 288, 280, 288);
    
    fill(113,166,106);
    triangle(355, 66, 267, 155, 444, 155);
    
    fill(243, 244, 203);
    ellipse(290, 260, 11, 11);
  }
  
  function yollar(){
    fill(174, 68, 68);
    quad(0, 335, 1000, 335, 1000, 311, 0, 311);
    rect(0,411,1000,22)
  
    fill(122,122,122);
    quad(0, 335, 1000, 335, 1000, 411, 0, 411);
    
    fill(235)
    rect (22, 362, 70, 15); 
    rect (132, 362, 70, 15);
    rect (242, 362, 70, 15);
    rect (352, 362, 70, 15);
    rect (462, 362, 70, 15);
    rect (572, 362, 70, 15);
    rect (682, 362, 70, 15);
    rect (792, 362, 70, 15);
    rect (902, 362, 70, 15);
   }
  
  function agac(x,y){
    fill(#a536);
    rect (x, y, 22, 17);
  
    fill(#3734);
    triangle(x+11, y-146, x-13, y, x+35, y);
    
     fill(#a536);
    rect (x, y, 22, 17);
  
    fill(#3734);
    triangle(x+11, y-146, x-13, y, x+35, y);
     fill(#a536);
    rect (x, y, 22, 17);
  
    fill(#3734);
    triangle(x+11, y-146, x-13, y, x+35, y);
     fill(#a536);
    rect (x, y, 22, 17);
  
    fill(#3734);
    triangle(x+11, y-146, x-13, y, x+35, y);
    
    
  }
  
  function draw() {
   
  }