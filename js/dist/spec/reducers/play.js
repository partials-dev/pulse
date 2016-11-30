'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  describe('Play', function () {
    it('should default to false', function () {
      expect(playReducer()).to.equal(false);
    });
    describe(TOGGLE_PLAY, function () {
      it('should negate the playing value', function () {
        var beforeState = false;
        var action = { type: TOGGLE_PLAY };
        var afterState = true;

        deepFreeze(action);
        expect(playReducer(beforeState, action)).to.deep.equal(afterState);
      });
    });
  });
};

/* global describe, it */

var _require = require('chai'),
    expect = _require.expect;

var _require2 = require('../../reducers/actions'),
    TOGGLE_PLAY = _require2.TOGGLE_PLAY;

var deepFreeze = require('deep-freeze');
var playReducer = require('../../reducers/play');