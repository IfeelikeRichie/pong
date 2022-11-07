let scoreA = document.getElementById('score-a')
let sca = 0
let scoreB = document.getElementById('score-b')
let scb = 0



export function updateScore(position){
      if (position.x <= 10){
            sca = sca + 1
            scoreB.innerHTML = sca
      }else if (position.x >=400){
            scb = scb+ 1
            scoreA.innerHTML = scb
      }
      
}
