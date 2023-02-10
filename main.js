const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff= document.querySelector('.sound-off')
let minutes
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

function countDown() {
  setTimeout(()=>{

    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)
 
    if(!minutes == 0 || !seconds == 0){
    displaySeconds.textContent = String(seconds - 1).padStart(2,"0")
    }

    if(minutes <= 0 ){
      togglePlayPauseButtons()
      toggleStopSetButtons()
      return
    }

    if(seconds <= 0){
      seconds = 2

      displayMinutes.textContent = String(minutes - 1).padStart(2,"0")
    }

    displaySeconds.textContent = String(seconds - 1).padStart(2,"0")
    
    countDown()  // Recursão (Quando uma função chama ela mesma)
  },1000)
}


function togglePlayPauseButtons() {
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')

}

function toggleStopSetButtons() { 
  btnStop.classList.toggle('hide')
  btnSet.classList.toggle('hide')
}

function toggleSoundOnOff() {
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
}

btnPlay.addEventListener('click', ()=>{
  togglePlayPauseButtons()
  toggleStopSetButtons()

  countDown()
})

btnPause.addEventListener('click', ()=>{
  togglePlayPauseButtons()
  
})

btnStop.addEventListener('click',() => {
  if(btnPlay.classList.contains('hide')){
    togglePlayPauseButtons()
  }

  toggleStopSetButtons()
})

btnSoundOn.addEventListener('click', ()=>{
  toggleSoundOnOff()
})

btnSoundOff.addEventListener('click', ()=>{
  toggleSoundOnOff()
})

btnSet.addEventListener('click', () => {
  minutes = prompt('Quantos minutos?')
  if(!minutes == ""){
  displayMinutes.innerText = String(minutes).padStart(2,"0")
  }
})