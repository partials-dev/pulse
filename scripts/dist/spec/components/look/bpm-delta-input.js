'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  describe('<BpmDeltaInput />', function () {
    var wrapper = void 0;
    beforeEach(function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_bpmDeltaInput2.default, null));
    });
    it('renders a number input', function () {
      (0, _expect2.default)(wrapper).to.have.descendants('input[type="number"]');
    });
    it('has id #bpm-delta-input', function () {
      (0, _expect2.default)(wrapper).to.have.id('bpm-delta-input');
    });
  });
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _expect = require('../expect');

var _expect2 = _interopRequireDefault(_expect);

var _bpmDeltaInput = require('../../../components/look/bpm-delta-input');

var _bpmDeltaInput2 = _interopRequireDefault(_bpmDeltaInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }