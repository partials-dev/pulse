'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _bigNumber = require('../look/big-number');

var _bigNumber2 = _interopRequireDefault(_bigNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(_ref) {
  var bpm = _ref.tempo.bpm;

  return { value: bpm + ' bpm' };
}

function mapDispatchToProps(dispatch, _ref2) {
  var state = _ref2.state;

  return {};
}

var CurrentBpm = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_bigNumber2.default);

exports.default = CurrentBpm;