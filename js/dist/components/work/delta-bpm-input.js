'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _numberInput = require('../look/number-input');

var _numberInput2 = _interopRequireDefault(_numberInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(_ref) {
  var bpmDelta = _ref.tempo.bpmDelta;

  return { value: bpmDelta, min: 0 };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(event) {
      var bpmDelta = parseInt(event.target.value, 10);
      dispatch({ type: 'SET_BPM_DELTA', bpmDelta: bpmDelta });
    }
  };
}

var DeltaBpmInput = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_numberInput2.default);

exports.default = DeltaBpmInput;