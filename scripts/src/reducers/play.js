import { TOGGLE_PLAY, SET_PLAY } from './actions'

export default function (state, action = {}) {
  if (typeof state === 'undefined') {
    return false
  }
  switch (action.type) {
    case TOGGLE_PLAY:
      return !state
    case SET_PLAY:
      return action.play
    default:
      return state
  }
}
