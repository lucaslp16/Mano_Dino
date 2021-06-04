const dino = document.querySelector('.man_dino');
const background = document.querySelector('.background');
let noDoubleJump = false;
let position = 0;

function handleKeyUp(event){
  if(event.keyCode === 32){
    if(!noDoubleJump){
      jump();
    }
  }
}

function jump(){
  
  noDoubleJump = true;

  let upInterval = setInterval(()=>{
    if(position >= 150){
      //Down
      clearInterval(upInterval)
      let downInterval = setInterval(() =>{
        if(position <= 0){
          clearInterval(downInterval);
          noDoubleJump = false;
        } else {
          position-=20;
          dino.style.bottom = position + 'px';
        }  
        },17)
    } else {
      //Up
        position += 20;
        dino.style.bottom = position + 'px';
      }

  },17)
}

function handleCacti(){
  const cacti = document.createElement('div');
  let positionCacti = 1000;
  let randomTime = Math.random() * 5000;

  cacti.classList.add('cacti');
  cacti.style.left = 1000 +'px';
  background.appendChild(cacti);

  let leftInterval = setInterval(()=>{
    if(positionCacti <-50){
        clearInterval(leftInterval);
        background.removeChild(cacti);
      }else if (positionCacti > 0 && positionCacti < 60 && position < 60){
        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="gameOver">⚰️ ☠️Mano dino morreu☠️ ⚰️</h1><h1 class="replay"><a href=""><img src="./img/reload.png" width="100px"/> </a></h1>'
        
      } else {
        positionCacti -= 20;
        cacti.style.left = positionCacti + 'px';
      } 
  },20);
  setTimeout(handleCacti, randomTime);
}

handleCacti()
document.addEventListener('keyup', handleKeyUp)
