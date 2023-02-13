export function Timer({
  displayMinutes,
  displaySeconds,
  btnPlay,
  controls,
  minutesPrompt
}) {

  let countDownTimer

  function countDown() {
     countDownTimer = setTimeout(() => {
      let seconds = Number(displaySeconds.textContent);
      let minutes = Number(displayMinutes.textContent);

     
        updateTimerDisplay(minutes, 0);
      

      if (minutes <= 0) {
        controls.togglePlayPauseButtons();
        controls.toggleStopSetButtons();

        return
      }

      if (seconds <= 0) {
        seconds = 3;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1).padStart(2, "0"));

      countDown(); // Recursion (When a function calls itself)
    }, 1000);

  }

  function updateTimerDisplay(minutes, seconds) {
    displayMinutes.innerText = String(minutes).padStart(2, "0");
    displaySeconds.innerText = String(seconds).padStart(2, "0");
  }

  function resetTimer() {
    if (btnPlay.classList.contains("hide")) {
      controls.togglePlayPauseButtons();
    }
    controls.toggleStopSetButtons();
    updateTimerDisplay(minutesPrompt, 0);
    clearTimeout(countDownTimer);
  }

  function hold() {
    clearTimeout(countDownTimer)
  }

  return {
    countDown,
    updateTimerDisplay,
    resetTimer,
    hold
  };
}
