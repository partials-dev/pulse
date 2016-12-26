'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MetronomeContainer;

var _metronome = require('../sound/metronome');

var _metronome2 = _interopRequireDefault(_metronome);

var _tempo = require('../../reducers/tempo');

var _tempo2 = _interopRequireDefault(_tempo);

var _beatDurationAt = require('../../beat-duration-at');

var _beatDurationAt2 = _interopRequireDefault(_beatDurationAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(_ref) {
  var play = _ref.play,
      _ref$tempo = _ref.tempo,
      beat = _ref$tempo.beat,
      bpm = _ref$tempo.bpm,
      bpmDelta = _ref$tempo.bpmDelta,
      changeInterval = _ref$tempo.changeInterval;

  function nextBeatsAt() {
    var lookahead = 10;
    var timestamps = [];
    for (var i = 0; i < lookahead; i++) {
      var futureState = (0, _tempo2.default)({ beat: beat + i, bpm: bpm, bpmDelta: bpmDelta, changeInterval: changeInterval });
      var secondsPerBeat = (0, _beatDurationAt2.default)(futureState.bpm).inSeconds;
      timestamps.push(i * secondsPerBeat);
    }
    return timestamps;
  }
  return { play: play, beat: beat, nextBeatsAt: nextBeatsAt, duration: 0.1 };
}

function mapDispatchToProps(dispatch) {
  var incrementBeat = function incrementBeat() {
    return dispatch({ type: 'INCREMENT_BEAT' });
  };
  return { incrementBeat: incrementBeat };
}

function MetronomeContainer(_ref2) {
  var state = _ref2.state,
      dispatch = _ref2.dispatch;

  var stateProps = mapStateToProps(state);
  var dispatchProps = mapDispatchToProps(dispatch);
  var props = Object.assign({}, stateProps, dispatchProps);
  (0, _metronome2.default)(props);
}