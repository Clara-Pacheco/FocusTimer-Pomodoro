export default function(
  
  controls,
  sounds,
  timer,
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff,
  minutes
){


  btnPlay.addEventListener('click', () => {
    controls.toggleStopSetButtons()
    controls.togglePlayPauseButtons()
    sounds.pressButton()
    controls.toggleSoundOn()
    sounds.bgAudioPlay()
    
    

    if (btnStop.classList.contains('hide')) {
      controls.toggleStopSetButtons()
    }

    timer.countDown()
  });

  btnPause.addEventListener('click', () => {
    controls.togglePlayPauseButtons()
    sounds.pressButton()
    controls.toggleSoundOnOff()
    sounds.bgAudioPause()


    timer.hold()
  });

  btnStop.addEventListener('click', () => {
    timer.resetTimer()
    timer.updateTimerDisplay(minutes,0)
    sounds.pressButton()
    sounds.bgAudio.pause()
    controls.toggleSoundOnOff()
  });

  btnSoundOn.addEventListener('click', () => {
    controls.toggleSoundOnOff()
    sounds.bgAudioPause()
    
  });

  btnSoundOff.addEventListener('click', () => {
    controls.toggleSoundOn()
    sounds.bgAudioPlay()
    
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
    timer.updateTimerDisplay(minutes, 0)
    timer.updateMinutes(newMinutes)

  })

}