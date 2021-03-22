import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    resultsAbout: [],
  };
  _handleAboutResult = (results) => {
    this.setState({ resultsAbout: results });
    console.log("Resultados del About", this.state.resultsAbout);
  };
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/about/:id">
            <About movies={this.state.resultsAbout}></About>
          </Route>
          <Route exact path="movie-search/">
            <Home setResults={this._handleAboutResult} />
          </Route>
          <Route path="*">
            <p>Not found</p>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
