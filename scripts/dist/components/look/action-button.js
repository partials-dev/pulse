'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActionButton(_ref) {
  var id = _ref.id,
      icon = _ref.icon,
      message = _ref.message,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      tabIndex = _ref.tabIndex;

  return _react2.default.createElement(
    'button',
    {
      className: 'action-button',
      id: id,
      onClick: onClick,
      onMouseDown: onMouseDown,
      tabIndex: tabIndex },
    _react2.default.createElement(
      'i',
      { style: { verticalAlign: 'text-bottom', marginRight: '0.5rem' },
        className: 'material-icons' },
      icon
    ),
    _react2.default.createElement(
      'span',
      { style: { marginRight: '0.55rem' } },
      message
    )
  );
}

exports.default = ActionButton;