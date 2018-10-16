// index.js
import React from "react";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import Results from "./components/results";
import SearchParams from "./components/searchparams";
import NavBar from "./components/navbar";
import store from "./store";
import Details from "./components/details";

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </main>
    );
  }
}
export default App;
