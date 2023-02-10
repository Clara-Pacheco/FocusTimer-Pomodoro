//named import
import { togglePlayPauseButtons, toggleStopSetButtons, toggleSoundOnOff } from "./controls.js"

// named import
import { countDown, updateTimerDisplay, resetTimer } from "./timer.js"

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff= document.querySelector('.sound-off')
const displayMinutes = document.querySelector('.minutes')
let minutes = Number(displayMinutes.textContent)
const displaySeconds = document.querySelector('.seconds')
let countDownTimer

// function countDown() {
//   countDownTimer = setTimeout(()=>{

//     let seconds = Number(displaySeconds.textContent)
//     let minutes = Number(displayMinutes.textContent)
 
//     if(!minutes == 0 || !seconds == 0){
//       updateTimerDisplay(minutes,0)
  
//     }

//     if(minutes <= 0 ){
//       togglePlayPauseButtons()
//       toggleStopSetButtons()
      
//       return
//     }

//     if(seconds <= 0){
//       seconds = 2

//       --minutes
//     }

//     updateTimerDisplay(minutes, String(seconds - 1))
    
//     countDown()  // Recursão (Quando uma função chama ela mesma)
//   },1000)
// }

// function updateTimerDisplay(minutes,seconds){
//   displayMinutes.innerText = String(minutes).padStart(2,"0")
//   displaySeconds.innerText = String(seconds).padStart(2,"0")
// }

// function resetTimer() {
//   if(btnPlay.classList.contains('hide')){
//     togglePlayPauseButtons()
//   }
//   toggleStopSetButtons()
//   updateTimerDisplay(minutes,0)
//   clearTimeout(countDownTimer)
// }


// function togglePlayPauseButtons() {
//   btnPlay.classList.toggle('hide')
//   btnPause.classList.toggle('hide')

// }

// function toggleStopSetButtons() { 
//   btnStop.classList.toggle('hide')
//   btnSet.classList.toggle('hide')
// }

// function toggleSoundOnOff() {
//   btnSoundOn.classList.toggle('hide')
//   btnSoundOff.classList.toggle('hide')
// }

btnPlay.addEventListener('click', ()=>{

  toggleStopSetButtons()
  togglePlayPauseButtons()

  if(btnStop.classList.contains('hide')){
    toggleStopSetButtons()
  }
  


  countDown()
})

btnPause.addEventListener('click', ()=>{
  togglePlayPauseButtons()
  clearTimeout(countDownTimer)
  
})

btnStop.addEventListener('click',() => {
  resetTimer()
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
  updateTimerDisplay(minutes,0)
}

})