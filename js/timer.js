import soundsElements from './sounds.js'

const sounds = soundsElements()


export function Timer({
  displayMinutes,
  displaySeconds,
  btnPlay,
  controls,
  minutes 
 
}) {


  let countDownTimer


  function countDown() {
     countDownTimer = setTimeout(() => {
      let seconds = Number(displaySeconds.textContent);
      let minutes = Number(displayMinutes.textContent);
      let isFinished = minutes <= 0 && seconds <= 0

     if( minutes === 0 && seconds !== 0){
        updateTimerDisplay(minutes, 0);
     }

      if (isFinished) {
        
        updateTimerDisplay()
        controls.togglePlayPauseButtons();
        controls.toggleStopSetButtons();
        sounds.timeOff()
        
       
        
        return
      }

      if (seconds <= 0) {
        seconds = 59;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1).padStart(2, "0"));

      countDown(); // Recursion (When a function calls itself)
    }, 1000);


  }

  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    displayMinutes.innerText = String(newMinutes).padStart(2, "0");
    displaySeconds.innerText = String(seconds).padStart(2, "0");
  }

  function resetTimer() {
    if (btnPlay.classList.contains("hide")) {
      controls.togglePlayPauseButtons()
    }
    controls.toggleStopSetButtons()
    hold()
      
  }

  function hold() {
    clearTimeout(countDownTimer)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    countDown,
    updateTimerDisplay,
    resetTimer,
    hold,
    updateMinutes
    
  }
}
