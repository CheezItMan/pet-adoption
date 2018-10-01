import React from "react";

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.petName),
    React.createElement("h2", {}, props.petType),
    React.createElement("h2", {}, props.petBreed)
  ]);
};

export default Pet;
