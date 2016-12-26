'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _tempo = require('./tempo');

var _tempo2 = _interopRequireDefault(_tempo);

var _play = require('./play');

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  tempo: _tempo2.default,
  play: _play2.default
});