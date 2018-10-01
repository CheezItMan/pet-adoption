// index.js
import React from "react";
import ReactDOM from "react-dom";

import Pet from "./components/pet";

class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        petName: "Lucky",
        petType: "Dog",
        petBreed: "Mini-Pincher"
      }),
      React.createElement(Pet, {
        petName: "Nicky",
        petType: "Dog",
        petBreed: "Mini-Pincher"
      }),
      React.createElement(Pet, {
        petName: "Shadow",
        petType: "Cat",
        petBreed: "Maine Coon"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
