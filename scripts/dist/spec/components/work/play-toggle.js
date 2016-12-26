'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  describe('<PlayToggle />', function () {
    var wrapper = void 0;
    var store = void 0;
    beforeEach(function () {
      store = (0, _redux.createStore)(_reducers2.default);
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_playToggle2.default, { store: store }));
    });

    it('renders a button', function () {
      (0, _expect2.default)(wrapper).to.have.descendants('button');
    });
    it("reflects app's play state", function () {
      var notPlayingStore = { getState: _sinon2.default.stub().returns({ play: false }) };
      var notPlayingWrapper = (0, _enzyme.shallow)(_react2.default.createElement(_playToggle2.default, { store: notPlayingStore }));
      var beforeText = notPlayingWrapper.text();

      var playingStore = { getState: _sinon2.default.stub().returns({ play: true }) };
      var playingWrapper = (0, _enzyme.shallow)(_react2.default.createElement(_playToggle2.default, { store: playingStore }));
      var afterText = playingWrapper.text();
      (0, _expect2.default)(beforeText).to.not.equal(afterText);
    });
  });
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _expect = require('../expect');

var _expect2 = _interopRequireDefault(_expect);

var _playToggle = require('../../../components/work/play-toggle');

var _playToggle2 = _interopRequireDefault(_playToggle);

var _redux = require('redux');

var _reducers = require('../../../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }