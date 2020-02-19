class Circle{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    set set_x(x){this.x = x;}
    get get_x(){return this.x;}
    set set_y(y){this.y = y;}
    get get_y(){return this.y;}
    set set_radius(radius){this.radius = radius;}
    get get_radius(){return this.radius;}
}

function drawCircle(circle,ctx){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI,false);
    ctx.closePath();
    ctx.stroke();
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function drawLine(x0,y0,x1,y1,ctx){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.closePath();
    ctx.stroke();
}

function drawRandomLine()
{
    drawLine(randomInt(0,Canvas.width),randomInt(0,Canvas.height),randomInt(0,Canvas.width),randomInt(0,Canvas.height),ctx);

}


let c = document.getElementById("Canvas");
let ctx = c.getContext("2d");
let number_of_lines = 50;
let count = 0;
let x0 = 0,y0 = 0,x1,y1;

//ctx.beginPath();
//ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
//context.fillStyle = 'green';
//context.fill();
//context.lineWidth = 5;
//context.strokeStyle = '#003300';
//ctx.stroke();

cir = new Circle(100, 100, 20);
drawCircle(cir,ctx);



let interval = setInterval(
    function(){
        if(count === number_of_lines){
            count = 0;
            ctx.clearRect(0,0,Canvas.width,Canvas.height);
        }
        x1 = randomInt(0,Canvas.width);
        y1 = randomInt(0,Canvas.height);
        drawLine(x0,y0,x1,y1,ctx);
        x0 = x1;
        y0 = y1;
        ++count;
},1000);