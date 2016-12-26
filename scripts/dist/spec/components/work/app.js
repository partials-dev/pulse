'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  describe('<App />', function () {
    var wrapper = void 0;
    var store = void 0;
    beforeEach(function () {
      store = (0, _redux.createStore)(_reducers2.default);
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_app2.default, { store: store }));
    });

    it('renders a #bpm-delta-input', function () {
      (0, _expect.expect)(wrapper).to.have.descendants('#bpm-delta-input');
    });
    it('renders a #play-toggle', function () {
      (0, _expect.expect)(wrapper).to.have.descendants('#play-toggle');
    });
  });
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _expect = require('../expect');

var _app = require('../../../components/app');

var _app2 = _interopRequireDefault(_app);

var _redux = require('redux');

var _reducers = require('../../../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }