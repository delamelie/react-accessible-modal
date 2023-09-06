<h1>react-accessible-modal-component-library</h1>

A React responsive modal component that handles accessibility requirements :
-	use of Esc key to close the modal
-	traps focus inside the modal
-	hides background content
-	focus on whatever field the user wants when it is closed (optional)

<h2>Installation</h2>
npm install react-accessible-modal

<h2>Usage</h2>
Import the component in a React app:
import { Modal } from "react-accessible-modal"
 

You can choose to use the version which allows you to put the focus on a specific tag when you close the modal or not

Here are 2 basic examples of how to use the plugin to give feedback to the user after a form submission. In the first example, when the user gets back to the page, the focus is placed on a specific element (input).
With focus :

import { useState, useRef } from "react";
import { Modal } from "modal-component-lib";

export default function MyComponent() {

  // Define state here
  const [showModal, setShowModal] = useState(false);

  // Example of values you can provide for the props
  const myIcon = "";
  const myMessage = "Employee created";
  const myButtonText = "OK";
  const myAriaLabel = "OK, fermer la fenêtre";

  // To put the focus on a specific tag when modal is closed
  const inputRef = useRef(null);

  function closeModal() {
    setShowModal(false);
    inputRef.current.focus();
  }

  return (
    <form>
      <input forwardedRef={inputRef} />
      <button type="submit">Save</button>

{/* The modal is conditionally rendered */}
      {showModal && (
        <Modal
          icon={myIcon}
          message={myMessage}
          buttonText={myButtonText}
          ariaLabel={myAriaLabel}
          closeModal={closeModal}
        />
      )}
    </form>
  );
}
 
Without focus :

import { useState } from "react";
import { Modal } from "modal-component-lib";

export default function MyComponent() {

  const [showModal, setShowModal] = useState(false);

  const myIcon = "";
  const myMessage = "Employee created";
  const myButtonText = "OK";
  const myAriaLabel = "OK, fermer la fenêtre";

  return (
    <form>
      <button type="submit">Save</button>

      {showModal && (
        <Modal
          icon={myIcon}
          message={myMessage}
          buttonText={myButtonText}
          ariaLabel={myAriaLabel}
          closeModal={() => setShowModal(false)}
        />
      )}
    </form>
  );
}
 


<h2>Modal props</h2>

 *required
Name	Type	Description
icon	string	icon
message*	string	message indicating that the action was successfully performed
buttonText*	string	text displayed inside the button
ariaLabel	string	label aiming to help uers of assistive technologies, especially if buttonText value is not explicit
closeModal*	function	fired when the user clicks on the button


