import React from "react";
import Entery from "./entery";
import emojipedia from "../emojipedia.js";

function emoji(emoji) {
  return (
    <Entery
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emoji)}</dl>
    </div>
  );
}

export default App;
