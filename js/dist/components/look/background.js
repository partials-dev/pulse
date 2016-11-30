'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = background;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function background() {
  return _react2.default.createElement(
    'div',
    { className: 'background' },
    _react2.default.createElement(
      'video',
      { preload: 'auto', autoPlay: 'true', loop: 'loop', muted: 'muted' },
      _react2.default.createElement('source', { src: 'videos/optical-poem.mp4', type: 'video/mp4' })
    )
  );
}