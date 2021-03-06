const canvas = document.querySelector('canvas')
const button = document.querySelector('button');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let curve;

function drawtree(startX,startY,len,angle,branchwidth,color1,color2){
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.lineWidth = branchwidth;
  ctx.translate(startX,startY)
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0,0);
//  ctx.lineTo(0,-len);
if(angle > 0){
  ctx.bezierCurveTo(50,-len/2,50,-len/2,0,-len)
}else{
  ctx.bezierCurveTo(50,-len/2,-50,-len/2,0,-len)
}
  ctx.stroke()
  if(len < 10){
    ctx.beginPath();
    ctx.arc(0,-len,10,0,Math.PI/2);
    ctx.fill()
    ctx.restore();
    return;
  }
  curve = (Math.random() * 10) + 10
  drawtree(0,-len,len * 0.75,angle + curve,branchwidth * 0.5);
  drawtree(0,-len,len * 0.75,angle - curve,branchwidth * 0.5);
  ctx.restore();
}
drawtree(canvas.width/2,canvas.height - 80,120,0,20,'green','brown');

function generaterandtree(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let centerpoint = canvas.width/2;
  let angle = 0;
  let len = Math.floor((Math.random() * 20 ) + 100);
  let branchwidth = (Math.random () * 70) + 1;
  let color1 = 'rgb(' + Math.random() * 255 +' ,' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  let color2 = 'rgb(' + Math.random() * 255 +' ,' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  drawtree(centerpoint,canvas.height - 80,len,angle,branchwidth,color1,color2)

}
button.addEventListener('click',generaterandtree)
