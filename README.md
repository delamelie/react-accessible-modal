<h1>react-accessible-modal-component-library</h1>
</br>

<img src="./modal-screenshot.PNG"/>

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
<br/>
With focus :
<br/>
<img src="./focus-screenshot.PNG"/>
<br/>
Without focus :
<br/>
<img src="./no-focus-screenshot.PNG"/>
<br/>

<h2>Modal props</h2>

<img src="./props-screenshot.PNG"/>


