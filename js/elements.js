const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnSet = document.querySelector('.set');
const btnSoundOn = document.querySelector('.sound-on');
const btnSoundOff = document.querySelector('.sound-off');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
let minutes = Number(displayMinutes.textContent);

export const elements = {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff,
  displayMinutes,
  displaySeconds,
  minutes
}