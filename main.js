import { drawBall, posBall, updateBall } from "./ball.js";
import { drawPaddleA, drawPaddleB, updatePaddleA, updatePaddleB } from "./paddle.js";
import { updateScore } from "./score.js";

const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

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
      updateScore(posBall)
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
