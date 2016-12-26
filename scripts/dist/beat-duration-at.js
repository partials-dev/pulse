"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = beatDurationAt;
function beatDurationAt(bpm) {
  var minutesPerBeat = 1 / bpm;
  var secondsPerBeat = minutesPerBeat * 60;
  var millisecondsPerBeat = secondsPerBeat * 1000;
  return {
    inMinutes: minutesPerBeat,
    inSeconds: secondsPerBeat,
    inMilliseconds: millisecondsPerBeat
  };
}