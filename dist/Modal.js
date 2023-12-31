"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * A React responsive modal component that handles accessibility requirements (use of escape key to close the modal, traps focus inside the modal, hides background content, focus on whatever field the user wants when the modal is closed)
 * @module Modal
 * @param {Object} icon
 * @param {String} message - message displayed to users
 * @param {String} buttonText - text displayed inside the button
 * @param {String} ariaLabel - to help users of assistive technologies with the use of the button
 * @param {Function} closeModal - to close the modal
 * @param {String} buttonStyle - custom style for button element
 * @param {String} iconStyle - custom style for icon element
 * @param {String} messageStyle - custom style for message element
 *
 * @returns { JSX } - HTMLElement
 */

const Modal = _ref => {
  let {
    icon,
    message,
    buttonText,
    ariaLabel,
    closeModal,
    buttonStyle,
    iconStyle,
    messageStyle
  } = _ref;
  // put focus on the close button
  const buttonRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    buttonRef.current.focus();
  }, []);
  (0, _react.useEffect)(() => {
    const buttonElement = buttonRef.current;

    /**
     * Trap focus inside the modal
     * @function
     * @param {Object} event
     */
    const handleTabKeyPress = event => {
      if (event.key === "Tab") {
        event.preventDefault();
        buttonElement.focus();
      }
    };

    /**
     * Handle use of escape key to close modal
     * @function
     * @param {Object} event
     */
    const handleEscKeyPress = event => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    buttonElement.addEventListener("keydown", handleTabKeyPress);
    buttonElement.addEventListener("keydown", handleEscKeyPress);
    return () => {
      buttonElement.removeEventListener("keydown", handleTabKeyPress);
      buttonElement.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [closeModal]);
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "alertdialog",
    "aria-modal": "true",
    "aria-labelledby": "dialog_label"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-title"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-icon",
    style: iconStyle
  }, icon), /*#__PURE__*/_react.default.createElement("h3", {
    className: "modal-message",
    id: "dialog_label",
    style: messageStyle
  }, message)), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-button",
    ref: buttonRef,
    "aria-label": ariaLabel,
    onClick: closeModal,
    style: buttonStyle
  }, buttonText)))));
};
var _default = Modal;
exports.default = _default;
Modal.propTypes = {
  icon: _propTypes.default.object,
  message: _propTypes.default.string,
  buttonText: _propTypes.default.string,
  ariaLabel: _propTypes.default.string,
  closeModal: _propTypes.default.func,
  buttonStyle: _propTypes.default.string,
  messageStyle: _propTypes.default.string,
  iconStyle: _propTypes.default.string
};