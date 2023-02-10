export function togglePlayPauseButtons() {
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')

}

export function toggleStopSetButtons() { 
  btnStop.classList.toggle('hide')
  btnSet.classList.toggle('hide')
}

export function toggleSoundOnOff() {
  btnSoundOn.classList.toggle('hide')
  btnSoundOff.classList.toggle('hide')
}

export { togglePlayPauseButtons, toggleStopSetButtons, toggleSoundOnOff }