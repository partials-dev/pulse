import { SET_SPIRIT_ANIMAL_SRC } from './actions'

// Pikki on her journey to mint land
// by Eran Hilleli
const pikkiUrl = 'http://68.media.tumblr.com/4a2ecf3258e23674bc4b253fd74bfa81/tumblr_msz5x3ACVh1qcoae6o1_400.gif'

const defaultState = {
  src: pikkiUrl
}

module.exports = function (state, action = {}) {
  state = Object.assign({}, defaultState, state)
  switch (action.type) {
    case SET_SPIRIT_ANIMAL_SRC:
      return Object.assign(state, { src: action.src })
    default:
      return state
  }
}
