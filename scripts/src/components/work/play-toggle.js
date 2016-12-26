import { connect } from 'react-redux'
import ActionButton from '../look/action-button'
import keycode from 'keycode'

function mapStateToProps ({ play }) {
  // const message = play ? 'Stop' : 'Play'
  const message = 'Press Enter'
  const icon = play ? 'stop' : 'play'
  return { message, icon, tabIndex: -1 }
}

function mapDispatchToProps (dispatch, { state }) {
  document.addEventListener('keydown', (e) => {
    if (keycode(e) === 'enter') {
      dispatch({ type: 'TOGGLE_PLAY' })
    }
  })
  return {
    onMouseDown: (e) => { e.preventDefault() },
    onClick: () => { dispatch({ type: 'TOGGLE_PLAY' }) }
  }
}

const PlayToggle = connect(mapStateToProps, mapDispatchToProps)(ActionButton)

export default PlayToggle
