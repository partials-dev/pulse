import React from 'react'
import DeltaBpmInput from './work/delta-bpm-input'
import PlayToggle from './work/play-toggle'
import TempoInput from './work/tempo-input'
import SpiritAnimal from './work/spirit-animal'
import ChangeIntervalInput from './work/change-interval-input'
import CurrentBpm from './work/current-bpm'

function App () {
  return <div>
    <section className='state'>
      <SpiritAnimal />
      <CurrentBpm />
    </section>

    <section className='controls'>
      <p>
        Start at <TempoInput tabIndex='1' /> beats per minute.
        <br />
        Change by <DeltaBpmInput tabIndex='2' /> bpm,
        <br />
        every <ChangeIntervalInput tabIndex='3' /> beats.
        <br />
      </p>
      <PlayToggle />
    </section>
  </div>
}

export default App
