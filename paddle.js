import { getInputDirectionA, getInputDirectionB } from './input.js'
import { ctx } from './main.js'

let paddleWidth = 10
let paddleHeight = 50
export let posPaddleA = {  x : 10, y : 180 }
export let posPaddleB = { x : 390, y : 180 }
let velPaddleA = { x : 0, y : 0 }
let velPaddleB = { x : 0, y : 0 }

export function drawPaddleA (){
      ctx.fillStyle = 'white'
      ctx.fillRect( posPaddleA.x, posPaddleA.y, paddleWidth, paddleHeight)
}

export function drawPaddleB (){
      ctx.fillStyle = 'white'
      ctx.fillRect( posPaddleB.x, posPaddleB.y, paddleWidth, paddleHeight)
}

export function updatePaddleA(){
      const inputDirection = getInputDirectionA()
      velPaddleA.y = inputDirection.y
      posPaddleA.y += velPaddleA.y
}

export function updatePaddleB(){
      const inputDirection = getInputDirectionB()
      velPaddleB.y = inputDirection.y
      posPaddleB.y += velPaddleB.y
}