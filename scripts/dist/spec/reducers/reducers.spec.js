'use strict';

var _play = require('./play');

var _play2 = _interopRequireDefault(_play);

var _tempo = require('./tempo');

var _tempo2 = _interopRequireDefault(_tempo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global describe */

describe('Reducers', function () {
  (0, _play2.default)();
  (0, _tempo2.default)();
});