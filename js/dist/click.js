// module.exports = function click (e) {
//   const audioContext = e.args.audioContext
//   const scheduler = e.args.scheduler
//
//   const t0 = e.playbackTime
//   const t1 = t0 + e.args.duration
//   const osc = audioContext.createOscillator()
//   const amp = audioContext.createGain()
//
//   osc.frequency.value = 440 + (440 * e.args.emphasis)
//   osc.start(t0)
//   osc.stop(t1)
//   osc.connect(amp)
//
//   amp.gain.setValueAtTime(0.5 + (0.5 * e.args.emphasis), t0)
//   amp.gain.exponentialRampToValueAtTime(1e-6, t1)
//   amp.connect(audioContext.destination)
//
//   scheduler.nextTick(t1, () => {
//     osc.disconnect()
//     amp.disconnect()
//   })
// }
"use strict";