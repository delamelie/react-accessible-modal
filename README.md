<h1>React plugin : react-accessible-modal</h1>
</br>

<img src="./modal-screenshot.PNG"/>

A React responsive modal component that handles accessibility requirements :
-	use of Escape key to close the modal
-	traps focus inside the modal
-	hides background content
-	focus on whatever field you want when the modal is closed (optional)

You can also choose to apply your own custom style for the button and the icon 
</br>
</br>
<h2>Install</h2>
Once you have set up your React app :
</br>
</br>
<code>npm install react-accessible-modal</code>
</br>
</br>
<h2>Use</h2>
<ol>
<li>Import the component in your React app :</li>
<code>import { Modal } from "react-accessible-modal";</code>
 </br>
 </br>
 <li>Set the state and variables :</li>
 e.g. </br>
 <code>import { useState } from "react";</code></br>
 <code>const [showModal, setShowModal] = useState(false);</code></br>
 <code>const myMessage = "Profile created successfully";</code></br>
 <code>const closeModal = () => setShowModal(false);</code></br>
 <code>const myButtonStyle = {backgroundColor: "#0891b2",};</code>
</br>
 </br>
  <li>Pass the onClick event that opens the modal :</li>
 e.g. </br>
 <code>&ltbutton type="submit" onClick={() =>setShowModal(true)}></code>
</br>
 </br>
<li>Return the component in your JSX using conditional rendering :</li>
<code>{showModal && (</br>
 &ltModal icon={myIcon} message={myMessage} buttonText={myButtonText} ariaLabel={myAriaLabel} closeModal={closeModal} buttonStyle={myButtonStyle} iconStyle={myIconStyle}</br>
 />)}</code></ol>
</br>
 </br>
 Optional feature : set focus on a specific element when the modal is closed :
 </br>
  </br>
 <ul><li>Set the useRef hook to target the element that will receive the focus (we have chosen an input tag for this example but it can be another element)</li>
 </br>
 <code>import { useRef } from "react";</code>
  </br>
<code>const inputRef = useRef(null);</code>
 </br>
   </br>
 <code>&ltinput forwardedRef={inputRef} /></code>
 </br>
   </br>
  <li>Replace the closeModal variable we have set up above by this one</li>
  </br>
 <code>const closeModal = () => {
    setShowModal(false);
    inputRef.current.focus();
  };</code></ul>
</br>
<h2>Props</h2>
</br>
 ** required props
<table>
  <thead>
    <tr>
      <th>Name</th>
     <th>Type</th>
     <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>icon</code></td>
      <td>string</td>
     <td>icon</td>
    </tr>
   <tr>
      <td><code>message</code>**</td>
      <td>string</td>
     <td>message confirming that the action was successfully performed</td>
    </tr>
   <tr>
      <td><code>buttonText</code>**</td>
      <td>string</td>
     <td>text displayed inside the button</td>
    </tr>
   <tr>
      <td><code>ariaLabel</code></td>
      <td>string</td>
     <td>label aiming to help users of assistive technologies, especially if buttonText value is not quite explicit</td>
    </tr>
   <tr>
      <td><code>closeModal</code>**</td>
      <td>function</td>
     <td>fired when the user clicks on the button</td>
    </tr>
   <tr>
      <td><code>buttonStyle</code></td>
      <td>string</td>
     <td>change the button styling by passing the properties directly to the prop</td>
    </tr>
   <tr>
      <td><code>iconStyle</code></td>
      <td>string</td>
     <td>change the icon styling by passing the properties directly to the prop</td>
    </tr>
  </tbody>
</table>

<h2>Examples</h2>
Here are 2 examples of how to use the plugin to give feedback to the user after a form submission. 
</br>
</br>
-	With focus : when the user gets back to the page, the focus is placed on a specific element (input)
</br>
<img src="./focus-screenshot.PNG"/>
</br>
-	Without focus
</br>
</br>
<img src="./no-focus-screenshot.PNG"/>
</br>


