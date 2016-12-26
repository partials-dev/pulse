import Metronome from '../sound/metronome'
import tempoReducer from '../../reducers/tempo'
import beatDurationAt from '../../beat-duration-at'

function mapStateToProps ({ play, tempo: { beat, bpm, bpmDelta, changeInterval } }) {
  function nextBeatsAt () {
    const lookahead = 10
    const timestamps = []
    for (let i = 0; i < lookahead; i++) {
      const futureState = tempoReducer({ beat: beat + i, bpm, bpmDelta, changeInterval })
      const secondsPerBeat = beatDurationAt(futureState.bpm).inSeconds
      timestamps.push(i * secondsPerBeat)
    }
    return timestamps
  }
  return { play, beat, nextBeatsAt, duration: 0.1 }
}

function mapDispatchToProps (dispatch) {
  const incrementBeat = () => dispatch({ type: 'INCREMENT_BEAT' })
  return { incrementBeat }
}

export default function MetronomeContainer ({ state, dispatch }) {
  const stateProps = mapStateToProps(state)
  const dispatchProps = mapDispatchToProps(dispatch)
  const props = Object.assign({}, stateProps, dispatchProps)
  Metronome(props)
}
