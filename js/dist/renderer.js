'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _metronomeContainer = require('./components/sound/metronome-container');

var _metronomeContainer2 = _interopRequireDefault(_metronomeContainer);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default); // This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// window.$ = window.jquery = require('../node_modules/jquery')
// const debounce = require('./debounce')
// const metronome = require('./metronome')
// const vkey = require('vkey')
// const bpmSlider = $('#bpm-input')
// const bpmLabel = $('#bpm-label')

var dispatch = store.dispatch.bind(store);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_app2.default, null)
), document.getElementById('root'));
store.subscribe(function () {
  var state = store.getState();
  console.log(JSON.stringify(state));
  (0, _metronomeContainer2.default)({ state: state, dispatch: dispatch });
});

// function currentBpm () {
//   return parseInt(bpmSlider.val(), 10)
// }
//
// var started = false
// function start () {
//   console.log('starting')
//   if (started) return
//   started = true
//   metronome.start({ startingBPM: currentBpm(), deltaBPM: 10, period: 8 })
// }
//
// function stop () {
//   console.log('stopping')
//   if (!started) return
//   started = false
//   metronome.stop()
// }
//
// $('#start').on('click', start)
// $('#stop').on('click', stop)
// const throttledStart = debounce(start, 100)
//
// bpmSlider.on('input', () => {
//   if (started) {
//     stop()
//     throttledStart()
//   }
// })
//
// function updateBPMLabel () {
//   bpmLabel.text(bpmSlider.val())
// }
// bpmSlider.on('input', updateBPMLabel)
// updateBPMLabel()
// $(document).on('keydown', (e) => {
//   if ('<control>' === vkey[e.keyCode]) {
//     bpmSlider.attr({ step: 0.1 })
//   }
// })
// $(document).on('keyup', (e) => {
//   if ('<control>' === vkey[e.keyCode]) {
//     bpmSlider.attr({ step: 1 })
//   }
// })