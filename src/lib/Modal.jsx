import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./modal.css";

/**
 * A React responsive modal component that handles accessibility requirements (use of escape key to close the modal, traps focus inside the modal, hides background content, ffocus on whatever field the user wants when the modal is closed)
 * @module Modal
 * @param {String} icon - to render more explicit message
 * @param {String} message - message displayed to users
 * @param {String} buttonText - to help users of assistive technologies with the use of the button
 * @param {String} ariaLabel - text on the button
 * @param {Function} closeModal - function to close the modal
 *
 * @returns { JSX } - HTMLElement
 */

export default function Modal({
  icon,
  message,
  buttonText,
  ariaLabel,
  closeModal,
}) {
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
              <div className="modal-icon">{icon}</div>
              <h3 className="modal-message" id="dialog_label">
                {message}
              </h3>
            </div>

            <button
              type="button"
              className="modal-button"
              ref={buttonRef}
              aria-label={ariaLabel}
              onClick={closeModal}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  ariaLabel: PropTypes.string,
  closeModal: PropTypes.func,
};

// with focus

// import { useState, useRef } from "react";
// import { Modal } from "modal-component-lib";

// export default function MyComponent() {

//   // Define state here
//   const [showModal, setShowModal] = useState(false);

//   // Example of values you can provide for the props
//   const myIcon = "";
//   const myMessage = "Employee created";
//   const myButtonText = "OK";
//   const myAriaLabel = "OK, fermer la fenêtre";

//   // To put the focus on a specific tag when modal is closed
//   const inputRef = useRef(null);

//   function closeModal() {
//     setShowModal(false);
//     inputRef.current.focus();
//   }

//   return (
//     <form>
//       <input forwardedRef={inputRef} />
//       <button type="submit">Save</button>

// {/* The modal is conditionally rendered */}
//       {showModal && (
//         <Modal
//           icon={myIcon}
//           message={myMessage}
//           buttonText={myButtonText}
//           ariaLabel={myAriaLabel}
//           closeModal={closeModal}
//         />
//       )}
//     </form>
//   );
// }

/// without focus

// import { useState } from "react";
// import { Modal } from "modal-component-lib";

// export default function MyComponent() {

//   const [showModal, setShowModal] = useState(false);

//   const myIcon = "";
//   const myMessage = "Employee created";
//   const myButtonText = "OK";
//   const myAriaLabel = "OK, fermer la fenêtre";

//   return (
//     <form>
//       <button type="submit">Save</button>

//       {showModal && (
//         <Modal
//           icon={myIcon}
//           message={myMessage}
//           buttonText={myButtonText}
//           ariaLabel={myAriaLabel}
//           closeModal={() => setShowModal(false)}
//         />
//       )}
//     </form>
//   );
// }
