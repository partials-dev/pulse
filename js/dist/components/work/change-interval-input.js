'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _numberInput = require('../look/number-input');

var _numberInput2 = _interopRequireDefault(_numberInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(_ref) {
  var changeInterval = _ref.tempo.changeInterval;

  return { value: changeInterval, min: 0 };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(event) {
      var changeInterval = parseInt(event.target.value, 10);
      dispatch({ type: 'SET_CHANGE_INTERVAL', changeInterval: changeInterval });
    }
  };
}

var ChangeIntervalInput = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_numberInput2.default);

exports.default = ChangeIntervalInput;