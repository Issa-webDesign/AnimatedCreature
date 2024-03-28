let speed = -1
//sky x's
//moon x
let moonX=470
//Cloud 1 x's
let cloudX=100
let cx1 = 120
let lx1=150 
let ox1=50
let ux1=30 
let dx1=7


//cloud 2 x's
  let cl2x = 295
  let l2x=315
  let o2x=345
//cloud 3 x's
  let c3x=420 
  let l3x=450
  let o3x=480
  
//head x's
    let thx=20
    let mx=130
// eyes
    let rex = 172

    //bottom 
    let bx = 230
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(39, 40, 56); 
  strokeWeight(1);
  //sky
  fill(255);
  //moon
  fill(179, 180, 225)
  ellipse(moonX,60,100)
  moonX=moonX -.5
  console.log(moonX)
  if (moonX ==0)
    {
      moonX=470
    }
  //cloud1;
  
  strokeWeight(0)
  fill(93, 89, 99) //gray
  
  ellipse(cloudX,40,50);
  cloudX=cloudX -.5
  //cloud animation
  console.log(cloudX)
  if(cloudX==0)
    {
      cloudX=510
    }
  ellipse(cx1,40,60);
  cx1=cx1 -.5
  //cloud animation
  console.log(cx1)
  if (cx1==0)
    {
      cx1=510
    }
  ellipse(lx1,50,50);
  lx1=lx1 -.5
  //cloud animation
  console.log(lx1)
  if (lx1 == 0)
  { 
  lx1=510
  }
  
  ellipse(ox1,40,50) ;
  ox1=ox1-.5
  //cloud animation
  console.log(ox1)
  if (ox1 == 0)
  {
    ox1=510
  }
  
  ellipse(ux1,45,40) ;
  ux1=ux1-.5
 // cloud aniamtion
  console.log(ux1)
  if (ux1 == 0)
    { 
    ux1 = 510
    }
  
  ellipse(dx1,34,60) ;
  dx1=dx1-.5
  //cloud animation
  console.log(dx1)
  if (dx1 == 0)
  { 
  dx1 =510
  }
  //cloud 2

    strokeWeight(0)
  fill(93, 89, 99) //gray
  
  ellipse(cl2x,50,50);
  cl2x=cl2x -.5
  console.log(cl2x)
  if (cl2x==0)
    { 
    cl2x=520
    }
  ellipse(l2x,40,60);
  l2x=l2x -.5
  console.log(l2x)
  if (l2x == 0)
    {
      l2x = 520
    }
  ellipse(o2x,50,50);
  o2x=o2x -.5
  console.log(o2x)
  if (o2x == 0)
  {
    o2x = 520
  }
  
  //cloud3
     strokeWeight(0)
  fill(93, 89, 99) //gray
  
  ellipse(c3x,100,50);
  c3x=c3x -.5
  console.log(c3x)
  if (c3x == 0)
    {
      c3x = 520
    }
  ellipse(l3x,90,60);
  l3x=l3x -.5
  console.log(l3x)
  if (l3x == 0)
    {
      l3x = 520
    }
  ellipse(o3x,100,50);
  o3x=o3x -.5
  console.log(o3x)
  if (o3x == 0)
    {
      o3x = 520
    }
  
    //floor
  fill(52, 79, 59)
  rect(0,450,500);

 
  
  
  
  
  
  
  
  
  //head
  
  strokeWeight(1);
  fill(91, 123, 122);
  //back head
  triangle(230,250,250,100,150,80);
  //top head
  triangle(thx,250,250,100,150,80);
thx=thx -.25
  console.log(thx)
  if (thx == - 1)
    {
      thx = 10
    }

  //eyes 
  strokeWeight(2);
  
  //sclereas
  fill (245, 255, 246)
  ellipse(170,125,20); 
  //right eye
  
   ellipse(140,125,20);  
  //left eye
  
  //pupils
  fill(41, 121, 41)
  //right eye
  ellipse(rex,125,10);
  
  fill(41, 41, 41)
  //left eye
   ellipse(138,125,10);
  
  //mouth
  fill(60, 136, 126);
  strokeWeight(1)
  
  triangle(mx,180,185,142,170,170);


  
  //bottom
 
  strokeWeight(1);
  fill(91, 123, 122);
  
    triangle(bx,450,238,310,430,450);
  bx = bx + speed
  console.log (bx)
 if (bx == 100)
  {
    bx = 250;
  }

  if (bx > 0)
    {
      speed = -speed;
    }
  if (bx > 0) {
    speed = -speed;
  }
  console.log(bx);
  
    //body
  strokeWeight(0);
  fill(91, 123, 122);
  ellipse(240,240,50,280);

}