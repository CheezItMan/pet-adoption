// index.js
import React from "react";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import Results from "./components/results";
import SearchParams from "./components/searchparams";
import NavBar from "./components/navbar";
import store from "./store";

const LoadableDetails = Loadable({
  loader: () => import("./components/details"),
  loading() {
    return <h1>Loading Split out code ...</h1>;
  }
});

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <LoadableDetails path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </main>
    );
  }
}
export default App;
