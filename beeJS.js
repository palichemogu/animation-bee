let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
// let position=0;
// let size=0;
// setInterval(function () {
//    ctx.clearRect(0,0,200,200);
//    ctx.fillRect(0,0,size,size);
//    size++;
//    if (size>200) {
//        size=0;
//    }  
//     },30);

let circle=function(x,y,radius,fillCircle,color)
{
 if(fillCircle)
{
ctx.strokeStyle=color;
ctx.beginPath();
ctx.arc(x,y,radius,0,Math.PI*2,true);
ctx.stroke();}
if(!fillCircle)
{
ctx.fillStyle=color
ctx.beginPath();
ctx.arc(x,y,radius,0,Math.PI*2,true);
ctx.fill();
}
};

let drawBee = function (x, y) {
 ctx.lineWidth = 2;
circle(x,y,8,false,"Gold");
circle(x,y,8,true,"Black");
circle(x+5,y-11,5,true,"Black");
circle(x-5,y-11,5,true,"Black");
circle(x-2,y-1,2,true,"Black");
circle(x+2,y-1,2,true,"Black");
};

let update=function(coordinate)
{
let offset=Math.random()*4-2;
coordinate+=offset;
if (coordinate>200) {
    coordinate=200;
}
if (coordinate<0) {
    coordinate=0;
}
return coordinate;
};
let x=100;
let y=100;
setInterval(
    function()
    {
ctx.clearRect(0,0,200,200);
drawBee(x,y);
x=update(x);
y=update(y);
ctx.strokeRect(0,0,200,200);
    } ,30);