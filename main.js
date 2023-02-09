const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

function togglePlayPauseButtons() {
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')

}

function toggleStopSetButtons() { 
  btnStop.classList.toggle('hide')
  btnSet.classList.toggle('hide')
}

btnPlay.addEventListener('click', ()=>{
  togglePlayPauseButtons()
  toggleStopSetButtons()
})

btnPause.addEventListener('click', ()=>{
  togglePlayPauseButtons()
  toggleStopSetButtons()
})

btnStop.addEventListener('click',() => {
  togglePlayPauseButtons()
  toggleStopSetButtons()
})