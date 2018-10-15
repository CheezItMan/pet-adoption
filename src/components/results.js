import React from "react";
import pf from "petfinder-client";
import { connect } from "react-redux";
import SearchBox from "./searchbox";

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
    this.search();
  }

  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.location,
        animal: this.props.animal,
        breed: this.props.breed
      })
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
  };
  render() {
    let pets = this.state.pets.filter(pet => {
      return pet.name !== null && pet.name !== "";
    });
    return (
      <section className="petlist search">
        <SearchBox search={this.search} />
        {pets.map(pet => {
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

const mapStateToProps = ({ location, breed, animal }) => ({
  location,
  animal,
  breed
});

export default connect(mapStateToProps)(Results);
