import React from "react";

const Pet = props => {
  return (
    <section>
      <h1>Pet {props.petName}</h1>
      <h2>{props.petType}</h2>
      <h2>{props.petBreed}</h2>
    </section>
  );
};

export default Pet;
