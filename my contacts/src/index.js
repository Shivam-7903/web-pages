import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <div>
    <App
      name="beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+91 9330599341"
      email="beyonce@hotmail.com"
    />
    <App
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />
    <App name="Chuck Norris" 
    img=  "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    tel="+91 9334533341" 
    email="chucknorris@hotmail.com" />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
