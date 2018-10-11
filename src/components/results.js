import React from "react";
import pf from "petfinder-client";

import Pet from "./pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    console.log("component mounted");

    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets
        });
      });
  }
  render() {
    return (
      <section className="petlist search">
        {this.state.pets.map(pet => {
          pet.breed = Array.isArray(pet.breed)
            ? pet.breed.join(", ")
            : pet.breed;

          return (
            <Pet
              id={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              key={pet.id}
            />
          );
        })}
      </section>
    );
  }
}

export default Results;
