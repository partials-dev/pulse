'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _audioContext = require('../../audio-context');

var _audioContext2 = _interopRequireDefault(_audioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var syncOffset = 0;

var Gif = function (_React$Component) {
  _inherits(Gif, _React$Component);

  function Gif(props) {
    _classCallCheck(this, Gif);

    var _this = _possibleConstructorReturn(this, (Gif.__proto__ || Object.getPrototypeOf(Gif)).call(this, props));

    _this.animate = _this.animate.bind(_this);
    _this.animate();
    return _this;
  }

  _createClass(Gif, [{
    key: 'animate',
    value: function animate() {
      var _this2 = this;

      window.requestAnimationFrame(function () {
        return _this2.animate();
      });
      var _props = this.props,
          stopped = _props.stopped,
          beat = _props.beat,
          beatDurationInSeconds = _props.beatDurationInSeconds,
          mostRecentBeatAt = _props.mostRecentBeatAt;

      if (!stopped) {
        beatDurationInSeconds = beatDurationInSeconds;
        var currentTime = _audioContext2.default.currentTime + syncOffset;
        var secondsSinceLastBeat = currentTime - mostRecentBeatAt;
        var beatFraction = secondsSinceLastBeat / beatDurationInSeconds;
        var beatDurationInMilliseconds = beatDurationInSeconds * 1000;

        this.xGif.clock(beat, beatDurationInMilliseconds, beatFraction);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.xGif = document.getElementById('spirit-animal');
      return null;
    }
  }]);

  return Gif;
}(_react2.default.Component);

exports.default = Gif;


Gif.propTypes = {
  stopped: _react.PropTypes.bool.isRequired,
  beat: _react.PropTypes.number.isRequired,
  beatDurationInSeconds: _react.PropTypes.number.isRequired,
  mostRecentBeatAt: _react.PropTypes.number.isRequired,
  src: _react.PropTypes.string.isRequired
};