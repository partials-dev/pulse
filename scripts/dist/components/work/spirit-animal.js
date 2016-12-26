'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _gif = require('../look/gif');

var _gif2 = _interopRequireDefault(_gif);

var _beatDurationAt = require('../../beat-duration-at');

var _beatDurationAt2 = _interopRequireDefault(_beatDurationAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pikkiUrl = 'http://67.media.tumblr.com/4a2ecf3258e23674bc4b253fd74bfa81/tumblr_msz5x3ACVh1qcoae6o1_400.gif';

function mapStateToProps(_ref) {
  var play = _ref.play,
      _ref$tempo = _ref.tempo,
      beat = _ref$tempo.beat,
      bpm = _ref$tempo.bpm,
      beatTimestamps = _ref$tempo.beatTimestamps;

  var stopped = !play;
  var beatDurationInSeconds = (0, _beatDurationAt2.default)(bpm).inSeconds;
  var mostRecentBeatAt = beatTimestamps[beatTimestamps.length - 1] || 0;
  return { stopped: stopped, beat: beat, src: pikkiUrl, beatDurationInSeconds: beatDurationInSeconds, mostRecentBeatAt: mostRecentBeatAt };
}

function mapDispatchToProps(dispatch) {
  return {};
}

var SpiritAnimal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_gif2.default);

exports.default = SpiritAnimal;