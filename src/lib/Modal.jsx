import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./modal.css";

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

const Modal = ({
  icon,
  message,
  buttonText,
  ariaLabel,
  closeModal,
  buttonStyle,
  iconStyle,
  messageStyle,
}) => {
  // put focus on the close button
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    /**
     * Trap focus inside the modal
     * @function
     * @param {Object} event
     */
    const handleTabKeyPress = (event) => {
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
    const handleEscKeyPress = (event) => {
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

  return (
    <div role="alertdialog" aria-modal="true" aria-labelledby="dialog_label">
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-title">
              <div className="modal-icon" style={iconStyle}>
                <i className={icon}></i>
              </div>
              <h3
                className="modal-message"
                id="dialog_label"
                style={messageStyle}
              >
                {message}
              </h3>
            </div>

            <button
              type="button"
              className="modal-button"
              ref={buttonRef}
              aria-label={ariaLabel}
              onClick={closeModal}
              style={buttonStyle}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  ariaLabel: PropTypes.string,
  closeModal: PropTypes.func,
  buttonStyle: PropTypes.string,
  messageStyle: PropTypes.string,
  iconStyle: PropTypes.string,
};
