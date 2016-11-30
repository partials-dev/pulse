'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actionButton = require('../look/action-button');

var _actionButton2 = _interopRequireDefault(_actionButton);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(_ref) {
  var play = _ref.play;

  // const message = play ? 'Stop' : 'Play'
  var message = 'Press Enter';
  var icon = play ? 'stop' : 'play_arrow';
  return { message: message, icon: icon, tabIndex: -1 };
}

function mapDispatchToProps(dispatch, _ref2) {
  var state = _ref2.state;

  document.addEventListener('keydown', function (e) {
    if ((0, _keycode2.default)(e) === 'enter') {
      dispatch({ type: 'TOGGLE_PLAY' });
    }
  });
  return {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
    },
    onClick: function onClick() {
      dispatch({ type: 'TOGGLE_PLAY' });
    }
  };
}

var PlayToggle = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_actionButton2.default);

exports.default = PlayToggle;