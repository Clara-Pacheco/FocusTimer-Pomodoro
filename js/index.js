
// Named import
import { ToggleButtons } from "./controls.js"

// Named import
import { Timer } from "./timer.js"

import { elements } from './elements.js'

import soundsElements from './sounds.js'

import Events from './events.js'


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

const sounds = soundsElements()

const timer = Timer({
  displayMinutes,
  displaySeconds,
  btnPlay,
  controls, 
  minutes,
  sounds,
  btnPause
})

Events(controls,
  sounds,
  timer,
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff,
  minutes)



