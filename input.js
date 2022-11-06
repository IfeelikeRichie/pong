
let inputDirectionA = {x: 0, y: 0};
let inputDirectionB = {x: 0, y: 0};

window.addEventListener('keydown', (e)=>{
      switch(e.key){
            case 'w':
                  inputDirectionA.y = -15
                  break
            case 's':
                  inputDirectionA.y = 15
                  break
      }
})
window.addEventListener('keydown', (e)=>{
      switch(e.key){
            case 'u':
                  inputDirectionB.y = -15
                  break
            case 'j':
                  inputDirectionB.y = 15
                  break
      }
})
window.addEventListener('keyup', (e)=>{
      switch(e.key){
            case 'w':
                  inputDirectionA.y = 0
                  break
            case 's':
                  inputDirectionA.y = 0
                  break
            case 'u':
                  inputDirectionB.y = 0
                  break
            case 'j':
                  inputDirectionB.y = 0
                  break
      }
})
export function getInputDirectionA(){
      return inputDirectionA
}

export function getInputDirectionB(){
      return inputDirectionB
}