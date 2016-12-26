'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      min = _ref.min,
      label = _ref.label,
      tabIndex = _ref.tabIndex,
      gotRef = _ref.gotRef;

  return _react2.default.createElement(
    'label',
    null,
    _react2.default.createElement('input', {
      className: 'number-input',
      value: value,
      placeholder: placeholder,
      onChange: onChange,
      min: min,
      ref: gotRef,
      tabIndex: tabIndex,
      inputMode: 'numeric',
      type: 'number',
      step: '1' }),
    label
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }