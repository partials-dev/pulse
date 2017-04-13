import { SET_ON_LINE } from './actions'

// assume we're offline unless we've been told otherwise
const defaultState = false

export default function (state, action = {}) {
  if (typeof state === 'undefined') {
    return defaultState
  }
  switch (action.type) {
    case SET_ON_LINE:
      return action.online
    default:
      return state
  }
}
