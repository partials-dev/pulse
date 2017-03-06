import React from 'react'
import DeltaBpmInput from './delta-bpm-input'
import PlayToggle from './play-toggle'
import BpmInput from './bpm-input'
import SpiritAnimal from './spirit-animal'
import ChangeIntervalInput from './change-interval-input'
import CurrentBpm from './current-bpm'

import { connect } from 'react-redux'

function mapStateToProps () {
  return {}
}

function mapDispatchToProps () {
  return {}
}

function MetronomePage ({ style }) {
  const bpm = <BpmInput tabIndex='1' />
  const deltaBpm = <DeltaBpmInput tabIndex='2' />
  const changeInterval = <ChangeIntervalInput tabIndex='3' />

  return <div style={style}>
    <section className='state'>
      <SpiritAnimal />
      <CurrentBpm />
    </section>

    <section className='controls'>
      <p>
        Start at {bpm} beats per minute.
        <br />
        Change by {deltaBpm} bpm
        <br />
        every {changeInterval} beats.
        <br />
      </p>
      <PlayToggle />
    </section>
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(MetronomePage)
