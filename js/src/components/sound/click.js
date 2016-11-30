function createOscillator ({ emphasis, audioContext }) {
  const osc = audioContext.createOscillator()
  const amp = audioContext.createGain()

  osc.frequency.value = 440 + (440 * emphasis)
  osc.connect(amp)
  amp.connect(audioContext.destination)

  return {
    start: (...args) => osc.start(...args),
    stop: (...args) => osc.stop(...args),
    disconnect: (...args) => {
      osc.disconnect(...args)
      amp.disconnect(...args)
    },
    gain: amp.gain
  }
}

function playAt ({ startTime, duration, osc }) {
  const stopTime = startTime + duration

  osc.start(startTime)
  osc.stop(stopTime)

  osc.gain.setValueAtTime(0.5, startTime)
  osc.gain.exponentialRampToValueAtTime(1e-6, stopTime)

  osc.onended = () => osc.disconnect()
}

export default function click ({ playbackTime, args: { audioContext, duration, incrementBeat } }) {
  const osc = createOscillator({ emphasis: 1, audioContext })
  playAt({ startTime: playbackTime, duration, osc })
  incrementBeat()
}
