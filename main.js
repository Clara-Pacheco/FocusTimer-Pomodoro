const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

function togglePlayPauseButtons(){
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')

}

btnPlay.addEventListener('click', ()=>{
  togglePlayPauseButtons()
})

btnPause.addEventListener('click', ()=>{
  togglePlayPauseButtons()
})