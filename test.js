//import Modal from "./Modal";

//with focus

// import { useState, useRef } from "react";
// import { Modal } from "react-accessible-modal";

// export default function MyComponent() {
//   //  Define state and variables
//   const [showModal, setShowModal] = useState(false);
//   const myIcon = "*";
//   const myMessage = "Profile created successfully !";
//   const myButtonText = "OK";
//   const myAriaLabel = "OK, close modal";
//   const myButtonStyle = { backgroundColor: "#0891b2" };
//   const myIconStyle = { borderRadius: "30px" };
//   const myMessageStyle = { fontSize: "45px" };
//   const openModal = (e) => {
//     e.preventDefault();
//     setShowModal(true);
//   };

//   // Put focus on a specific element when modal is closed
//   const inputRef = useRef(null);
//   const closeModal = () => {
//     setShowModal(false);
//     inputRef.current.focus();
//   };

//   return (
//     //Pass the onClick or onSubmit event that opens the modal
//     <form onSubmit={openModal}>
//       <input />
//       <input ref={inputRef} />
//       <button type="submit">Save</button>
//       {/* The modal is conditionally rendered */}
//       {showModal && (
//         <Modal
//           icon={myIcon}
//           message={myMessage}
//           buttonText={myButtonText}
//           ariaLabel={myAriaLabel}
//           closeModal={closeModal}
//           buttonStyle={myButtonStyle}
//           iconStyle={myIconStyle}
//           messageStyle={myMessageStyle}
//         />
//       )}
//     </form>
//   );
// }

/// without focus

import { useState } from "react";
import { Modal } from "react-accessible-modal";

export default function MyComponent() {
  // Define state and variables
  const [showModal, setShowModal] = useState(false);

  const myIcon = "*";
  const myMessage = "Profile created successfully !";
  const myButtonText = "OK";
  const myAriaLabel = "OK, close modal";
  const closeModal = () => setShowModal(false);
  const myButtonStyle = { backgroundColor: "#0891b2" };
  const myIconStyle = { borderRadius: "30px" };
  const myMessageStyle = { fontSize: "45px" };

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    //Pass the onClick or onSubmit event that opens the modal
    <form onSubmit={openModal}>
      <button type="submit">Save</button>

      {/* The modal is conditionally rendered */}
      {showModal && (
        <Modal
          icon={myIcon}
          message={myMessage}
          buttonText={myButtonText}
          ariaLabel={myAriaLabel}
          closeModal={closeModal}
          buttonStyle={myButtonStyle}
          iconStyle={myIconStyle}
          messageStyle={myMessageStyle}
        />
      )}
    </form>
  );
}
