//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import Reactdom from "react-dom";

const date = new Date();
const hour = date.getHours();
var greet;

const custom = {
  color: " ",
};
if (hour >= 0 && hour < 12) {
  greet = "good morning";
  custom.color = "red";
} else if (hour > 12 && hour <= 16) {
  greet = " good evening";
  custom.color = "green";
} else {
  greet = "good night";
  custom.color = "blue";
}

Reactdom.render(
  <h1 className="heading" style={custom}>
    {greet}
  </h1>,
  document.getElementById("root")
);
