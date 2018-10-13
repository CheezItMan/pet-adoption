import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "../searchcontext";

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
      <Consumer>
        {context => {
          console.log("rendering SearchBox");

          return (
            <form className="search-params" onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location
                <input
                  onChange={context.handleLocationChange}
                  id="location"
                  name="location"
                  value={context.location}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Animal Type
                <select
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                  id="animal"
                  name="animal"
                  value={context.animal}
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
                  onChange={context.handleBreedChange}
                  value={context.breed}
                  id="breed"
                  name="breed"
                  onBlur={this.handleBreedChange}
                  disabled={context.breeds.length === 0}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
                <button onClick={this.handleFormSubmit}>submit</button>
              </label>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchBox;
