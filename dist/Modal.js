"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * A React responsive modal component that handles accessibility requirements (use of escape key to close the modal, traps focus inside the modal, hides background content, focus on whatever field the user wants when the modal is closed)
 * @module Modal
 * @param {String} icon - to render more explicit message
 * @param {String} message - message displayed to users
 * @param {String} buttonText - to help users of assistive technologies with the use of the button
 * @param {String} ariaLabel - text on the button
 * @param {Function} closeModal - function to close the modal
 * @param {String} buttonStyle - custom style for the button element
 * @param {String} iconStyle - custom style for the icon element
 * @param {String} messageStyle - custom style for the message element
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
  return /*#__PURE__*/React.createElement("div", {
    role: "alertdialog",
    "aria-modal": "true",
    "aria-labelledby": "dialog_label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-icon",
    style: iconStyle
  }, icon), /*#__PURE__*/React.createElement("h3", {
    className: "modal-message",
    id: "dialog_label",
    style: messageStyle
  }, message)), /*#__PURE__*/React.createElement("button", {
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
  icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  message: _propTypes.default.string.isRequired,
  buttonText: _propTypes.default.string.isRequired,
  ariaLabel: _propTypes.default.string,
  closeModal: _propTypes.default.func.isRequired,
  buttonStyle: _propTypes.default.string,
  messageStyle: _propTypes.default.string,
  iconStyle: _propTypes.default.string
};