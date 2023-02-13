export function ToggleButtons({
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff
}){


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

  function toggleSoundOn() {
    btnSoundOn.classList.toggle('hide')
    btnSoundOff.classList.toggle('hide')
  }

  return {
    togglePlayPauseButtons,
    toggleStopSetButtons,
    toggleSoundOnOff,
    toggleSoundOn
  }

}

