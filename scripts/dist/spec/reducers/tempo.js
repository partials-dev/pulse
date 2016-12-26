'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  describe('Tempo', function () {
    it('bpm should default to 120', function () {
      expect(tempoReducer()).to.have.property('bpm').that.equals(120);
    });
    it('changeInterval should default to Number.POSITIVE_INFINITY', function () {
      expect(tempoReducer()).to.have.property('changeInterval').that.equals(8);
    });
    it('bpmDelta should default to 0', function () {
      expect(tempoReducer()).to.have.property('bpmDelta').that.equals(5);
    });
    describe(SET_BPM, function () {
      it('should set the bpm value', function () {
        var beforeState = { bpm: 120 };
        var action = { type: SET_BPM, bpm: 220 };
        var expectedBpm = 220;

        deepFreeze(beforeState);
        deepFreeze(action);
        var actual = tempoReducer(beforeState, action);
        expect(actual).to.have.property('bpm').that.equals(expectedBpm);
      });
    });
    describe(SET_TEMPO_CHANGE_INTERVAL, function () {
      it('should set the change interval', function () {
        var beforeState = { changeInterval: 0 };
        var action = { type: SET_TEMPO_CHANGE_INTERVAL, changeInterval: 16 };
        var expectedChangeInterval = 16;

        deepFreeze(beforeState);
        deepFreeze(action);
        var actual = tempoReducer(beforeState, action);
        expect(actual).to.have.property('changeInterval').that.equals(expectedChangeInterval);
      });
    });
    describe(SET_BPM_DELTA, function () {
      it('should set the amount the bpm each changes each interval', function () {
        var beforeState = { tempo: { bpmDelta: 0 } };
        var action = { type: SET_BPM_DELTA, bpmDelta: 10 };
        var expectedBpmDelta = 10;

        deepFreeze(beforeState);
        deepFreeze(action);
        var actual = tempoReducer(beforeState, action);
        expect(actual).to.have.property('bpmDelta').that.equals(expectedBpmDelta);
      });
    });
    describe(INCREMENT_BEAT, function () {
      it('should not change the bpm by bpmDelta if a new changeInterval has not been completed', function () {
        var beforeState = { bpm: 1, bpmDelta: 1, changeInterval: 2 };
        var action = { type: INCREMENT_BEAT };
        var expectedBpm = 1;

        deepFreeze(beforeState);
        deepFreeze(action);
        var actual = tempoReducer(beforeState, action);
        expect(actual).to.have.property('bpm').that.equals(expectedBpm);
      });
      it('should change the tempo by bpmDelta if a new changeInterval has been completed', function () {
        var beforeState = { bpm: 1, bpmDelta: 1, changeInterval: 1 };
        var action = { type: INCREMENT_BEAT };
        var expectedBpm = 2;

        deepFreeze(beforeState);
        deepFreeze(action);
        var actual = tempoReducer(beforeState, action);
        expect(actual).to.have.property('bpm').that.equals(expectedBpm);
      });
      it('should increment the beat', function () {
        var beforeState = { beat: 0 };
        var action = { type: INCREMENT_BEAT };
        var expectedBeat = 1;

        deepFreeze(beforeState);
        deepFreeze(action);
        var actual = tempoReducer(beforeState, action);
        expect(actual).to.have.property('beat').that.equals(expectedBeat);
      });
    });
    describe(RESET_BEAT, function () {
      it('should set the beat back to 0', function () {
        var beforeState = { beat: 5 };
        var action = { type: RESET_BEAT };
        var expectedBeat = 0;

        deepFreeze(beforeState);
        deepFreeze(action);
        var actual = tempoReducer(beforeState, action);
        expect(actual).to.have.property('beat').that.equals(expectedBeat);
      });
    });
  });
};

/* global describe, it */

var _require = require('chai'),
    expect = _require.expect;

var _require2 = require('../../reducers/actions'),
    SET_BPM = _require2.SET_BPM,
    SET_TEMPO_CHANGE_INTERVAL = _require2.SET_TEMPO_CHANGE_INTERVAL,
    SET_BPM_DELTA = _require2.SET_BPM_DELTA,
    INCREMENT_BEAT = _require2.INCREMENT_BEAT,
    RESET_BEAT = _require2.RESET_BEAT;

var deepFreeze = require('deep-freeze');
var tempoReducer = require('../../reducers/tempo');