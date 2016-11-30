export default function beatDurationAt (bpm) {
  const minutesPerBeat = 1 / bpm
  const secondsPerBeat = minutesPerBeat * 60
  const millisecondsPerBeat = secondsPerBeat * 1000
  return {
    inMinutes: minutesPerBeat,
    inSeconds: secondsPerBeat,
    inMilliseconds: millisecondsPerBeat
  }
}
