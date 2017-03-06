import { connect } from 'react-redux'
import Gif from '../look/x-gif'
import beatDurationAt from '../../beat-duration-at'

export default function defineBeatGif (mapStateToSrc, mapDispatchToProps) {
  function mapStateToProps (state) {
    const { play, tempo: { beat, bpm, beatTimestamps } } = state
    const stopped = !play
    const beatDurationInSeconds = beatDurationAt(bpm).inSeconds
    const mostRecentBeatAt = beatTimestamps[beatTimestamps.length - 1] || 0
    const src = mapStateToSrc(state)
    return {
      stopped,
      beat,
      src,
      beatDurationInSeconds,
      mostRecentBeatAt
    }
  }

  const BeatGif = connect(mapStateToProps, mapDispatchToProps)(Gif)
  return BeatGif
}
