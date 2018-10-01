// index.js
import React from "react";
import ReactDOM from "react-dom";

import Pet from "./components/pet";

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Adopt Me</h1>
        <Pet petName="Lucky" petType="Dog" petBreed="Pomeranian" />
        <Pet petName="Nicky" petType="Dog" petBreed="Mini Pincher" />
      </main>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
