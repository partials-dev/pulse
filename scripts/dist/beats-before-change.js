"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = beatsBeforeChange;
function beatsBeforeChange(beat, changeInterval) {
  if (changeInterval < 1) {
    return Number.POSITIVE_INFINITY;
  }
  return changeInterval - beat % changeInterval;
}