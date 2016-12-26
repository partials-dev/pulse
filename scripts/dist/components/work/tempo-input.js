'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _numberInput = require('../look/number-input');

var _numberInput2 = _interopRequireDefault(_numberInput);

var _tempo = require('../../reducers/tempo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(_ref) {
  var bpm = _ref.tempo.bpm;

  if (bpm === null) {
    bpm = '';
  }
  return {
    value: bpm,
    min: _tempo.minBpm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gotRef: function gotRef(numberInput) {
      document.addEventListener('keydown', function (e) {
        var number = parseInt((0, _keycode2.default)(e), 10);
        var didPressNumber = !Number.isNaN(number);
        var activeElementIsInput = document.activeElement.nodeName.toLowerCase() === 'input';
        var shouldFocus = didPressNumber && !activeElementIsInput;

        if (shouldFocus) {
          numberInput.focus();
          // dispatch({ type: 'SET_PLAY', play: false })
          dispatch({ type: 'SET_BPM', bpm: null });
        }
      });
    },
    onChange: function onChange(event) {
      var bpm = parseInt(event.target.value, 10);
      console.log('setting bpm: ' + bpm);
      dispatch({ type: 'SET_BPM', bpm: bpm });
    }
  };
}

var TempoInput = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_numberInput2.default);

exports.default = TempoInput;