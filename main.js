import { drawBall, posBall, updateBall } from "./ball.js";
import { drawPaddleA, drawPaddleB, updatePaddleA, updatePaddleB } from "./paddle.js";

const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

let scoreA = document.getElementById('score-a')
let scoreB = document.getElementById('score-b');

let sca = 1
let scb = 1

if(posBall.x <0){
      scoreA.innerHTML = sca
}
if(posBall.x > 400){
      scoreB.innerHTML = scb
}

canvas.width = 410
canvas.height =410

const RENDER_SPEED = 10

let lastRender = 0

function draw() {
      drawPaddleA()
      drawPaddleB()
      drawBall()
}
function update(){
      draw()
      updatePaddleA()
      updatePaddleB()
      updateBall()
}
function animate(currentTime) {
      window.requestAnimationFrame(animate)
      const secondsSinceLastRender = (currentTime - lastRender)/1000
      if(secondsSinceLastRender < 1 / RENDER_SPEED)return
      lastRender = currentTime
      ctx.fillStyle = 'black'
      ctx.fillRect(0,0,canvas.width,canvas.height)
      update()
}
animate()