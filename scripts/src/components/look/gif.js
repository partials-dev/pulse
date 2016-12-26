import React, { PropTypes } from 'react'
import audioContext from '../../audio-context'

const syncOffset = 0

export default class Gif extends React.Component {
  constructor (props) {
    super(props)
    this.animate = this.animate.bind(this)
    this.animate()
  }
  animate () {
    window.requestAnimationFrame(() => this.animate())
    let { stopped, beat, beatDurationInSeconds, mostRecentBeatAt } = this.props
    if (!stopped) {
      beatDurationInSeconds = beatDurationInSeconds
      const currentTime = audioContext.currentTime + syncOffset
      const secondsSinceLastBeat = currentTime - mostRecentBeatAt
      const beatFraction = secondsSinceLastBeat / beatDurationInSeconds
      const beatDurationInMilliseconds = beatDurationInSeconds * 1000

      this.xGif.clock(beat, beatDurationInMilliseconds, beatFraction)
    }
  }
  render () {
    this.xGif = document.getElementById('spirit-animal')
    return null
  }
}

Gif.propTypes = {
  stopped: PropTypes.bool.isRequired,
  beat: PropTypes.number.isRequired,
  beatDurationInSeconds: PropTypes.number.isRequired,
  mostRecentBeatAt: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
}
