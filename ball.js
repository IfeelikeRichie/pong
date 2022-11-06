import { ctx } from "./main.js"
import { posPaddleA, posPaddleB } from "./paddle.js"
let width = 10
export let posBall = { x: 200, y: 200}
let random = Math.floor(Math.random()*4)+1
let velBall = { x: random, y: random }


export function drawBall(){
      ctx.fillStyle = 'white'
      ctx.fillRect(posBall.x, posBall.y, width, width)
}


export function updateBall(){
      moveBall(random)
      bounceBall()
      paddleBounce(posPaddleA, posPaddleB)
      outOfBounds()
}

function moveBall(x){
      if ( x== 1){
            posBall.x  += velBall.x
            posBall.y += velBall.y
      }else if (x == 2){
            posBall.x -= velBall.x
            posBall.y -= velBall.y
      }else if (x == 3){
            posBall.x += velBall.x
            posBall.y -= velBall.y
      }else if (x ==4){
            posBall.x -= velBall.x
            posBall.y += velBall.y
      }
}

function bounceBall(){
      if (posBall.y == 0|| posBall.y ==400){
            if(Math.sign(velBall.y) ==1){
                  velBall.y = -5
            }else if(Math.sign(velBall.y) == -1){
                  velBall.y = 5
            }
      }
}

function paddleBounce(posPaddleA, posPaddleB){
      if((posBall.y < (posPaddleA.y +50))&&(posBall.y > posPaddleA.y)&&(posBall.x == (posPaddleA.x +10))||(posBall.x==(posPaddleB.x -10))&&(posBall.y< (posPaddleB.y +50))&&(posBall.y > posPaddleB.y)){
            if(Math.sign(velBall.x)==1){
                  velBall.x = -5
            }else if(Math.sign(velBall.x)==-1){
                  velBall.x = 5
            }
      }
}
function outOfBounds(){
      if(posBall.x<0||posBall.x>400){
            posBall = {x:200,y:200}
            moveBall(random)
      }
}