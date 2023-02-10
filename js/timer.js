function countDown() {
  countDownTimer = setTimeout(()=>{

    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)
 
    if(!minutes == 0 || !seconds == 0){
      updateTimerDisplay(minutes,0)
  
    }

    if(minutes <= 0 ){
      togglePlayPauseButtons()
      toggleStopSetButtons()
      
      return
    }

    if(seconds <= 0){
      seconds = 2

      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    
    countDown()  // Recursão (Quando uma função chama ela mesma)
  },1000)
}

function updateTimerDisplay(minutes,seconds){
  displayMinutes.innerText = String(minutes).padStart(2,"0")
  displaySeconds.innerText = String(seconds).padStart(2,"0")
}

function resetTimer() {
  if(btnPlay.classList.contains('hide')){
    togglePlayPauseButtons()
  }
  toggleStopSetButtons()
  updateTimerDisplay(minutes,0)
  clearTimeout(countDownTimer)
}

export { countDown, updateTimerDisplay, resetTimer }