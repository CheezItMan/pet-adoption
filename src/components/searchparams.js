import React from "react";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchParams extends React.Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds: []
  };

  getBreeds = () => {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          console.log(`Getting Breeds ${data.petfinder.breeds.breed}`);

          this.setState({
            breeds: data.petfinder.breeds.breed
          });
        } else {
          this.setState({
            breeds: []
          });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            name="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal Type
          <select
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
            id="animal"
            name="animal"
            value={this.state.animal}
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
            onChange={this.handleBreedChange}
            value={this.state.breed}
            id="breed"
            name="breed"
            onBlur={this.handleBreedChange}
            disabled={this.state.breeds.length === 0}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <button>submit</button>
        </label>
      </div>
    );
  }
}

export default SearchParams;
