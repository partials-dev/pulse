import WebAudioScheduler from 'web-audio-scheduler'
import WorkerTimer from 'worker-timer'
import click from './click'
import audioContext from '../../audio-context'

const scheduler = new WebAudioScheduler({
  context: audioContext,
  timerAPI: WorkerTimer
})

let nextBeatsAt

function metronome ({ playbackTime, args }) {
  const delayTimes = nextBeatsAt()
  delayTimes.forEach((delayTime, i) => {
    const isLast = i === (delayTimes.length - 1)
    const toCall = isLast ? metronome : click
    scheduler.insert(playbackTime + delayTime, toCall, args)
  })
}

let previouslyPlaying = false
export default function render (args) {
  args = Object.assign({}, args, { audioContext })
  const { play } = args
  if (play) {
    nextBeatsAt = args.nextBeatsAt
    if (!previouslyPlaying) {
      previouslyPlaying = play
      scheduler.start(metronome, args)
    }
  } else {
    previouslyPlaying = play
    scheduler.stop(true)
  }
}
