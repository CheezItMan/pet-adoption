import React from "react";
import { connect } from "react-redux";
import { ANIMALS } from "petfinder-client";
import getBreeds from "../actionCreators/getBreeds";
import changeAnimal from "../actionCreators/changeanimal";
import changeBreed from "../actionCreators/changebreed";
import changeLocation from "../actionCreators/changelocation";

class SearchBox extends React.Component {
  handleFormSubmit = event => {
    console.log("preventing default");
    event.preventDefault();
    this.props.search();
  };
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds: []
  };

  render() {
    return (
      <form className="search-params" onSubmit={this.handleFormSubmit}>
        <label htmlFor="location">
          Location
          <input
            onChange={this.props.handleLocationChange}
            id="location"
            name="location"
            value={this.props.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal Type
          <select
            onChange={this.props.handleAnimalChange}
            onBlur={this.props.handleAnimalChange}
            id="animal"
            name="animal"
            value={this.props.animal}
          >
            <option value="">All Animals</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {`${animal.charAt(0).toUpperCase()}${animal.slice(1)}`}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            onChange={this.props.handleBreedChange}
            value={this.props.breed}
            id="breed"
            name="breed"
            onBlur={this.handleBreedChange}
            disabled={this.props.breeds.length === 0}
          >
            <option />
            {this.props.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <button onClick={this.handleFormSubmit}>submit</button>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  animal,
  location
});

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  },

  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
