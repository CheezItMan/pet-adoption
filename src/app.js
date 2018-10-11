// index.js
import React from "react";
import { Router, Link } from "@reach/router";
import Results from "./components/results";
import Details from "./components/details";
import SearchParams from "./components/searchparams";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

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
