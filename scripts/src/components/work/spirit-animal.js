import { connect } from 'react-redux'
import Gif from '../look/x-gif'
import beatDurationAt from '../../beat-duration-at'

const pikkiUrl = 'http://68.media.tumblr.com/4a2ecf3258e23674bc4b253fd74bfa81/tumblr_msz5x3ACVh1qcoae6o1_400.gif'

function mapStateToProps ({ play, tempo: { beat, bpm, beatTimestamps } }) {
  const stopped = !play
  const beatDurationInSeconds = beatDurationAt(bpm).inSeconds
  const mostRecentBeatAt = beatTimestamps[beatTimestamps.length - 1] || 0
  return { stopped, beat, src: pikkiUrl, beatDurationInSeconds, mostRecentBeatAt }
}

function mapDispatchToProps (dispatch) {
  return {}
}

const SpiritAnimal = connect(mapStateToProps, mapDispatchToProps)(Gif)

export default SpiritAnimal
