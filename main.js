const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff= document.querySelector('.sound-off')

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