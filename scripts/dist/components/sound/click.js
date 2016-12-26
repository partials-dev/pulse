"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = click;
function createOscillator(_ref) {
  var emphasis = _ref.emphasis,
      audioContext = _ref.audioContext;

  var osc = audioContext.createOscillator();
  var amp = audioContext.createGain();

  osc.frequency.value = 440 + 440 * emphasis;
  osc.connect(amp);
  amp.connect(audioContext.destination);

  return {
    start: function start() {
      return osc.start.apply(osc, arguments);
    },
    stop: function stop() {
      return osc.stop.apply(osc, arguments);
    },
    disconnect: function disconnect() {
      osc.disconnect.apply(osc, arguments);
      amp.disconnect.apply(amp, arguments);
    },
    gain: amp.gain
  };
}

function playAt(_ref2) {
  var startTime = _ref2.startTime,
      duration = _ref2.duration,
      osc = _ref2.osc;

  var stopTime = startTime + duration;

  osc.start(startTime);
  osc.stop(stopTime);

  osc.gain.setValueAtTime(0.5, startTime);
  osc.gain.exponentialRampToValueAtTime(1e-6, stopTime);

  osc.onended = function () {
    return osc.disconnect();
  };
}

function click(_ref3) {
  var playbackTime = _ref3.playbackTime,
      _ref3$args = _ref3.args,
      audioContext = _ref3$args.audioContext,
      duration = _ref3$args.duration,
      incrementBeat = _ref3$args.incrementBeat;

  var osc = createOscillator({ emphasis: 1, audioContext: audioContext });
  playAt({ startTime: playbackTime, duration: duration, osc: osc });
  incrementBeat();
}