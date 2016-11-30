// const WebAudioScheduler = require('web-audio-scheduler')
// const WorkerTimer = require('worker-timer')
// const click = require('./click')
//
// const audioContext = new window.AudioContext()
// const scheduler = new WebAudioScheduler({
//   context: audioContext,
//   timerAPI: WorkerTimer
// })
//
// function durationOf (bpm) {
//   const minutesPerBeat = 1 / bpm
//   const secondsPerBeat = minutesPerBeat * 60
//   return secondsPerBeat
// }
//
// function bpm ({startingBPM, deltaBPM, periodsCompleted}) {
//   return startingBPM + (deltaBPM * periodsCompleted)
// }
//
// function emphasisOf (beat) {
//   if (beat === 0) return 0.1
//   return 0
// }
//
// function durationDenominator (beat) {
//   if (beat === 0) return 2
//   return 4
// }
//
// function schedule (e) {
//   console.log('scheduling')
//   const { period } = e.args
//   e.args.periodsCompleted = e.args.periodsCompleted || 0
//
//   const beatDelay = durationOf(bpm(e.args))
//   for (var beat = 0; beat < period; beat++) {
//     const emphasis = emphasisOf(beat)
//     const duration = Math.min(beatDelay / durationDenominator(beat), 1)
//     scheduler.insert(e.playbackTime + (beat * beatDelay), click, { emphasis, duration, audioContext, scheduler })
//   }
//
//   e.args.periodsCompleted += 1
//   const periodDuration = beatDelay * period
//   scheduler.insert(e.playbackTime + periodDuration, schedule, e.args)
// }
//
// module.exports = {
//   start ({ startingBPM, deltaBPM, period }) {
//     if (!startingBPM || !deltaBPM || !period) {
//       throw new Error('Must define starting bpm, delta bpm, and period when starting a metronome')
//     }
//     scheduler.start(schedule, { startingBPM, deltaBPM, period })
//   },
//   stop () {
//     scheduler.removeAll()
//     scheduler.stop()
//   }
// }
"use strict";