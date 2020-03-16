"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Diggy =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Diggy, _React$Component);

  function Diggy(props) {
    var _this;

    _classCallCheck(this, Diggy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Diggy).call(this, props));
    _this.openDiggy = _this.openDiggy.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Diggy, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement("script");
      script.src = "https://582statoil.boost.ai/chatPanel/chatPanel.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, {
    key: "openDiggy",
    value: function openDiggy() {
      var chatPanel = window.boostChatPanel({
        withCredentials: this.props.withCredentials,
        apiUrlBase: this.props.apiUrlBase,
        userToken: this.props.userToken,
        filterValues: this.props.filterValues,
        hyperlinksTargetBlank: this.props.hyperlinksTargetBlank
      });
      chatPanel.show();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("a", {
        href: true,
        onClick: this.openDiggy
      }, "Click here"));
    }
  }]);

  return Diggy;
}(_react["default"].Component);

Diggy.propTypes = {
  withCredentials: _propTypes["default"].bool,
  apiUrlBase: _propTypes["default"].string.isRequired,
  userToken: _propTypes["default"].string,
  filterValues: _propTypes["default"].string,
  hyperlinksTargetBlank: _propTypes["default"].bool
};
Diggy.defaultProps = {
  withCredentials: false,
  userToken: '',
  filterValues: '',
  hyperlinksTargetBlank: true
};
var _default = Diggy;
exports["default"] = _default;
