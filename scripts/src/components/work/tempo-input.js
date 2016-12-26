import { connect } from 'react-redux'
import keycode from 'keycode'
import NumberInput from '../look/number-input'
import { minBpm } from '../../reducers/tempo'

function mapStateToProps ({ tempo: { bpm } }) {
  if (bpm === null) {
    bpm = ''
  }
  return {
    value: bpm,
    min: minBpm
  }
}

function mapDispatchToProps (dispatch) {
  return {
    gotRef: (numberInput) => {
      document.addEventListener('keydown', (e) => {
        const number = parseInt(keycode(e), 10)
        const didPressNumber = !Number.isNaN(number)
        const activeElementIsInput = document.activeElement.nodeName.toLowerCase() === 'input'
        const shouldFocus = didPressNumber && !activeElementIsInput

        if (shouldFocus) {
          numberInput.focus()
          // dispatch({ type: 'SET_PLAY', play: false })
          dispatch({ type: 'SET_BPM', bpm: null })
        }
      })
    },
    onChange: (event) => {
      const bpm = parseInt(event.target.value, 10)
      dispatch({ type: 'SET_BPM', bpm })
    }
  }
}

const TempoInput = connect(mapStateToProps, mapDispatchToProps)(NumberInput)

export default TempoInput
