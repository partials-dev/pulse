'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deltaBpmInput = require('./work/delta-bpm-input');

var _deltaBpmInput2 = _interopRequireDefault(_deltaBpmInput);

var _playToggle = require('./work/play-toggle');

var _playToggle2 = _interopRequireDefault(_playToggle);

var _tempoInput = require('./work/tempo-input');

var _tempoInput2 = _interopRequireDefault(_tempoInput);

var _spiritAnimal = require('./work/spirit-animal');

var _spiritAnimal2 = _interopRequireDefault(_spiritAnimal);

var _changeIntervalInput = require('./work/change-interval-input');

var _changeIntervalInput2 = _interopRequireDefault(_changeIntervalInput);

var _currentBpm = require('./work/current-bpm');

var _currentBpm2 = _interopRequireDefault(_currentBpm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_spiritAnimal2.default, null),
      _react2.default.createElement(_currentBpm2.default, null)
    ),
    _react2.default.createElement(
      'div',
      { id: 'text-section' },
      'Start at ',
      _react2.default.createElement(_tempoInput2.default, { tabIndex: '1' }),
      ' beats per minute.',
      _react2.default.createElement('br', null),
      'Change by ',
      _react2.default.createElement(_deltaBpmInput2.default, { tabIndex: '2' }),
      ' bpm,',
      _react2.default.createElement('br', null),
      'every ',
      _react2.default.createElement(_changeIntervalInput2.default, { tabIndex: '3' }),
      ' beats.',
      _react2.default.createElement('br', null)
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_playToggle2.default, null)
    )
  );
}

exports.default = App;