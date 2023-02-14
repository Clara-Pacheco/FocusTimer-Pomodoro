
// Named import
import { ToggleButtons } from "./controls.js";

// Named import
import { Timer } from "./timer.js";

import { elements } from './elements.js'

// const btnPlay = document.querySelector('.play');
// const btnPause = document.querySelector('.pause');
// const btnStop = document.querySelector('.stop');
// const btnSet = document.querySelector('.set');
// const btnSoundOn = document.querySelector('.sound-on');
// const btnSoundOff = document.querySelector('.sound-off');
// const displayMinutes = document.querySelector('.minutes');
// const displaySeconds = document.querySelector('.seconds');
// let minutes = Number(displayMinutes.textContent);

let {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff,
  displayMinutes,
  displaySeconds,
  minutes
} = elements   // Destructuring 


const controls = ToggleButtons({
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  btnPlay,
  controls, 
  minutes
});


btnPlay.addEventListener('click', () => {
  controls.toggleStopSetButtons();
  controls.togglePlayPauseButtons();

  if (btnStop.classList.contains('hide')) {
    controls.toggleStopSetButtons();
  }

  timer.countDown();
});

btnPause.addEventListener('click', () => {
  controls.togglePlayPauseButtons();
  timer.hold();
});

btnStop.addEventListener('click', () => {
  timer.resetTimer();
  timer.updateTimerDisplay(minutes,0)
});

btnSoundOn.addEventListener('click', () => {
  controls.toggleSoundOnOff();
});

btnSoundOff.addEventListener('click', () => {
  controls.toggleSoundOn();
});

btnSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    // timer.resetTimer()
    controls.togglePlayPauseButtons()
    controls.togglePlayPauseButtons()
    return
    
  }

  minutes = newMinutes
  timer.updateTimerDisplay(minutes, 0);
  timer.updateMinutes(newMinutes)

});
