const canv = document.getElementById("canvas");
const ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
let rainColor = '#ffffff';

var rainDrop = [];

document.querySelector('#color').addEventListener('change', changeColor)

function changeColor(e) {
    rainColor = e.target.value;
}

setInterval(loop, 10);

class Rain {
    constructor(x,y, size, speed){
        this.x = x,
        this.y = y,
        this.size = size,
        this.speedY = speed
    }
    show(){
        ctx.beginPath();
        ctx.strokeStyle = rainColor;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.stroke();
    }
    fall(){
        this.y += this.speedY;
        if(this.y >= canv.height){
            this.y = (Math.random() * 10) + 1;
            this.x = (Math.random() * canv.width) - 15;
            this.size = (Math.random() *35) + 1;
            this.speedY = (Math.random() *12) + 4;
        }
    }
}
 for(let i= 0; i < 100; i++){
     rainDrop[i] = new Rain(
        (Math.random() * 10) + 1,
        (Math.random() * canv.width) - 15,
        (Math.random() *30) + 1,
        (Math.random() *12) + 3
     )
 }
// LOOP

function loop() {
    ctx.clearRect(0, 0, canv.width, canv.height);
    for(let j = 0; j<rainDrop.length; j++) {
    rainDrop[j].show();
    rainDrop[j].fall();
    }
}
