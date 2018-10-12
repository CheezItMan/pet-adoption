// index.js
import React from "react";
import { Router, Link } from "@reach/router";
import Results from "./components/results";
import Details from "./components/details";
import SearchParams from "./components/searchparams";
import pf from "petfinder-client";
import { Provider } from "./searchcontext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value,
        breed: ""
      },
      this.getBreeds
    );
  };

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
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
      <main>
        <h1>
          <Link to="/">Adopt Me</Link>
        </h1>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </main>
    );
  }
}
export default App;
