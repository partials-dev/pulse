// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// window.$ = window.jquery = require('../node_modules/jquery')
// const debounce = require('./debounce')
// const metronome = require('./metronome')
// const vkey = require('vkey')
// const bpmSlider = $('#bpm-input')
// const bpmLabel = $('#bpm-label')
import ReactDOM from 'react-dom'
import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'
import MetronomeContainer from './components/sound/metronome-container'
import rootReducer from './reducers'

const store = createStore(rootReducer)
const dispatch = store.dispatch.bind(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
store.subscribe(() => {
  const state = store.getState()
  console.log(JSON.stringify(state))
  MetronomeContainer({ state, dispatch })
})

// function currentBpm () {
//   return parseInt(bpmSlider.val(), 10)
// }
//
// var started = false
// function start () {
//   console.log('starting')
//   if (started) return
//   started = true
//   metronome.start({ startingBPM: currentBpm(), deltaBPM: 10, period: 8 })
// }
//
// function stop () {
//   console.log('stopping')
//   if (!started) return
//   started = false
//   metronome.stop()
// }
//
// $('#start').on('click', start)
// $('#stop').on('click', stop)
// const throttledStart = debounce(start, 100)
//
// bpmSlider.on('input', () => {
//   if (started) {
//     stop()
//     throttledStart()
//   }
// })
//
// function updateBPMLabel () {
//   bpmLabel.text(bpmSlider.val())
// }
// bpmSlider.on('input', updateBPMLabel)
// updateBPMLabel()
// $(document).on('keydown', (e) => {
//   if ('<control>' === vkey[e.keyCode]) {
//     bpmSlider.attr({ step: 0.1 })
//   }
// })
// $(document).on('keyup', (e) => {
//   if ('<control>' === vkey[e.keyCode]) {
//     bpmSlider.attr({ step: 1 })
//   }
// })
