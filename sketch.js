/**
* Shane Pierre
* IGME-102: Assignment Name, 1/17/20
* Summarization of sketch activity
*/ 

"use strict"; //catch some common coding errors
let pac = [];
/**
* setup :
*/
function setup() {
    angleMode(DEGREES)
    createCanvas(600, 400)
    background('gray')
    let p = new Pac();
    for(let i = 0; i < pac.length; i++){
        pac.push(p)
    }
    for(let x = 100; x < width; x = x + 100){
        p.x = x
        for(let y = 100; y < height; y = y + 100){
            p.y = y
        }
    }

}

/**
* draw :
*/
function draw() {
   background('black')
   if(key === '2'){
    for(let i = 0; i < pac.length; i++){
        p.update()
        p.display()
   }
}
}

function wordGrid(){
    background('black')
    textSize(20)
    fill('gray')
    for(let i = 20; i < height; i = i + 30){
        text('hi', 10, i)
        for(let j = 10; j < width; j = j + 40){
            text('hi', j, i)
        }
    }
}
function keyTyped(){
    if(key === '1'){
        wordGrid()
    }
}