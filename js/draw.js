function can() {
    var can=document.getElementById("myCanvas");
    var ctx=can.getContext("2d");
    var img=new Image();
    img.onload = function() {
      ctx.drawImage(img,0,0,can.width,can.height);
    }
    img.src="http://www.cs.ucsb.edu/~pconrad/dpea/lightsculpture/images/prototy\
peboardWColors.jpg" 
}

var coordinates=[0, 0, {xval: 212, yval: 411}, {xval: 212, yval: 386}, {xval: 213, yval: 362}, {xval: 212, yval: 335}, {xval: 215, yval: 315},
 {xval: 211, yval: 284}, {xval: 212, yval: 261}, {xval: 130, yval: 413}, {xval: 126, yval: 385}, {xval: 131, yval: 359}, {xval: 128, yval: 335},
 {xval: 128, yval: 309}, {xval: 130, yval: 283}, {xval: 129, yval: 257}];

var colors=[0, 0, "red", "66ff00", "red", "66ff00", "red", "66ff00", "red", "orange", "orange", "orange", "0033ff", "0033ff", "ffff00", "ffff00"];

function updateStatusHigh(x) {
  array[x]=1;
  draw(array);
}

function updateStatusLow(x) {
  array[x]=0;
  draw(array);
}

function draw(x) {
  var can=document.getElementById("myCanvas2");
  var ctx=can.getContext("2d"), i,j;
  ctx.clearRect(0,0,can.width,can.height);
  for(i=0;i<x.length;i++) {
    if(x[i]==1) {
      ctx.globalAlpha=0.7;
      var grd=ctx.createRadialGradient(coordinates[i].xval,coordinates[i].yval,3,coordinates[i].xval,coordinates[i].yval,8);
      grd.addColorStop(0,"white");
      grd.addColorStop(1,colors[i]);
      ctx.fillStyle=grd;
      ctx.beginPath();
      ctx.arc(coordinates[i].xval,coordinates[i].yval,9,0,2*Math.PI);
      ctx.stroke();
      ctx.fill();
    }
  }
}

