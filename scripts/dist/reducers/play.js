'use strict';

var _require = require('./actions'),
    TOGGLE_PLAY = _require.TOGGLE_PLAY,
    SET_PLAY = _require.SET_PLAY;

module.exports = function (state) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof state === 'undefined') {
    return false;
  }
  switch (action.type) {
    case TOGGLE_PLAY:
      return !state;
    case SET_PLAY:
      return action.play;
    default:
      return state;
  }
};