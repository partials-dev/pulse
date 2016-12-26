'use strict';

/* global describe, it */

var _require = require('chai'),
    expect = _require.expect;

var actions = require('../../reducers/actions');

describe('Actions', function () {
  it('should all have string values', function () {
    for (var key in actions) {
      expect(actions[key]).to.be.a('string');
    }
  });
});