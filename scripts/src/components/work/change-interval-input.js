import { connect } from 'react-redux'
import NumberInput from '../look/number-input'

function mapStateToProps ({ tempo: { changeInterval } }) {
  return { value: changeInterval, min: 0 }
}

function mapDispatchToProps (dispatch) {
  return {
    onChange: (event) => {
      const changeInterval = parseInt(event.target.value, 10)
      dispatch({ type: 'SET_CHANGE_INTERVAL', changeInterval })
    }
  }
}

const ChangeIntervalInput = connect(mapStateToProps, mapDispatchToProps)(NumberInput)

export default ChangeIntervalInput
