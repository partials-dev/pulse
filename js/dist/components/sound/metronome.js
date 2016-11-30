'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _webAudioScheduler = require('web-audio-scheduler');

var _webAudioScheduler2 = _interopRequireDefault(_webAudioScheduler);

var _workerTimer = require('worker-timer');

var _workerTimer2 = _interopRequireDefault(_workerTimer);

var _click = require('./click');

var _click2 = _interopRequireDefault(_click);

var _audioContext = require('../../audio-context');

var _audioContext2 = _interopRequireDefault(_audioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scheduler = new _webAudioScheduler2.default({
  context: _audioContext2.default,
  timerAPI: _workerTimer2.default
});

var nextBeatsAt = void 0;

function metronome(_ref) {
  var playbackTime = _ref.playbackTime,
      args = _ref.args;

  var delayTimes = nextBeatsAt();
  delayTimes.forEach(function (delayTime, i) {
    var isLast = i === delayTimes.length - 1;
    var toCall = isLast ? metronome : _click2.default;
    scheduler.insert(playbackTime + delayTime, toCall, args);
  });
}

var previouslyPlaying = false;
function render(args) {
  args = Object.assign({}, args, { audioContext: _audioContext2.default });
  var _args = args,
      play = _args.play;

  if (play) {
    nextBeatsAt = args.nextBeatsAt;
    if (!previouslyPlaying) {
      previouslyPlaying = play;
      scheduler.start(metronome, args);
    }
  } else {
    previouslyPlaying = play;
    scheduler.stop(true);
  }
}