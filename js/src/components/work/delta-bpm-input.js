import { connect } from 'react-redux'
import NumberInput from '../look/number-input'

function mapStateToProps ({ tempo: { bpmDelta } }) {
  return { value: bpmDelta, min: 0 }
}

function mapDispatchToProps (dispatch) {
  return {
    onChange: (event) => {
      const bpmDelta = parseInt(event.target.value, 10)
      dispatch({ type: 'SET_BPM_DELTA', bpmDelta })
    }
  }
}

const DeltaBpmInput = connect(mapStateToProps, mapDispatchToProps)(NumberInput)

export default DeltaBpmInput
