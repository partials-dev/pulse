'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minBpm = exports.defaultState = undefined;
exports.default = tempoReducer;

var _actions = require('./actions');

var _beatsBeforeChange = require('../beats-before-change');

var _beatsBeforeChange2 = _interopRequireDefault(_beatsBeforeChange);

var _audioContext = require('../audio-context');

var _audioContext2 = _interopRequireDefault(_audioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = exports.defaultState = {
  beat: 0,
  bpm: 120,
  // bpmDelta: 0,
  // changeInterval: Number.POSITIVE_INFINITY
  bpmDelta: 5,
  changeInterval: 8,
  beatTimestamps: []
};

var minBpm = exports.minBpm = 1;

function append(list, last) {
  // creates a new array, unlike push
  return [].concat(_toConsumableArray(list), [last]);
}

function incrementBeat(state) {
  // compute new bpm
  var beat = state.beat + 1;
  var justCompletedInterval = (0, _beatsBeforeChange2.default)(beat, state.changeInterval) === state.changeInterval;
  var bpmDelta = justCompletedInterval ? state.bpmDelta : 0;
  var bpm = state.bpm + bpmDelta;

  // update beat timestamps
  var beatTimestamps = append(state.beatTimestamps, _audioContext2.default.currentTime);
  return Object.assign({}, state, { beatTimestamps: beatTimestamps, beat: beat, bpm: bpm });
}

function bpmIsValid(bpm) {
  return bpm === null || typeof bpm === 'number' && bpm >= minBpm;
}

function tempoReducer(state) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // make sure state has all the properties of defaultState
  state = Object.assign({}, defaultState, state);
  switch (action.type) {
    case _actions.SET_BPM:
      if (!bpmIsValid(action.bpm)) {
        throw new Error('bpm must be null or a number at least equal to ' + minBpm);
      }
      return Object.assign({}, state, { bpm: action.bpm });
    case _actions.SET_BPM_DELTA:
      return Object.assign({}, state, { bpmDelta: action.bpmDelta });
    case _actions.SET_TEMPO_CHANGE_INTERVAL:
      return Object.assign({}, state, { changeInterval: action.changeInterval });
    case _actions.INCREMENT_BEAT:
      return incrementBeat(state);
    case _actions.RESET_BEAT:
      return Object.assign({}, state, { beat: 0 });
    default:
      return state;
  }
}