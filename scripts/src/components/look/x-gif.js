import React, { PropTypes } from 'react'
import audioContext from '../../audio-context'

const syncOffset = 0

export default class Gif extends React.Component {
  constructor (props) {
    super(props)
    this.animate = this.animate.bind(this)
    this.animate()
  }
  shouldComponentUpdate (nextProps) {
    // We update the xGif manually using the animate function, so no need
    // for React to ever re-render this component unless the src changes.
    // NOTE: if this component ever ends up with other props that could legit
    // require a re-render, make sure to handle them here.
    if (this.props.src !== nextProps.src) {
      return true
    }
    return false
  }
  animate () {
    window.requestAnimationFrame(() => this.animate())
    if (!this.xGif) { return }
    let { stopped, beat, beatDurationInSeconds, mostRecentBeatAt } = this.props
    if (!stopped) {
      // beatDurationInSeconds = beatDurationInSeconds
      const currentTime = audioContext.currentTime + syncOffset
      const secondsSinceLastBeat = currentTime - mostRecentBeatAt
      const beatFraction = secondsSinceLastBeat / beatDurationInSeconds
      const beatDurationInMilliseconds = beatDurationInSeconds * 1000

      this.xGif.clock(beat, beatDurationInMilliseconds, beatFraction)
    }
  }
  render () {
    const gotRef = xGif => {
      if (xGif != null && xGif.playbackMode != null) { xGif.createdCallback() }
      this.xGif = xGif
    }
    return <x-gif
      sync
      snap
      title={this.props.tooltip}
      ref={gotRef}
      src={this.props.src}
      class={this.props.className}
      onClick={this.props.onClick}
    />
  }
}

Gif.propTypes = {
  tooltip: PropTypes.string,
  stopped: PropTypes.bool.isRequired,
  beat: PropTypes.number.isRequired,
  beatDurationInSeconds: PropTypes.number.isRequired,
  mostRecentBeatAt: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
}
