import { connect } from 'react-redux'
import ActionButton from '../look/big-number'

function mapStateToProps ({ tempo: { bpm } }) {
  return { value: `${bpm} bpm` }
}

function mapDispatchToProps (dispatch, { state }) {
  return {}
}

const CurrentBpm = connect(mapStateToProps, mapDispatchToProps)(ActionButton)

export default CurrentBpm
