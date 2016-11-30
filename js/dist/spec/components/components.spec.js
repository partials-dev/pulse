'use strict';

require('./setup');

var _bpmDeltaInput = require('./look/bpm-delta-input');

var _bpmDeltaInput2 = _interopRequireDefault(_bpmDeltaInput);

var _playToggle = require('./work/play-toggle');

var _playToggle2 = _interopRequireDefault(_playToggle);

var _app = require('./work/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global describe */

describe('Components', function () {
  (0, _bpmDeltaInput2.default)();
  (0, _playToggle2.default)();
  (0, _app2.default)();
}); // run setup code before any tests