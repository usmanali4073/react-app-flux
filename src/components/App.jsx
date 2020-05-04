import HomePage from "./HomePage";
import About from "./About";
import Headers from "../common/Headers";
import CoursesPage from "./CoursesPage";

import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Headers />
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={CoursesPage} />
      </React.Fragment>
    );
  }
}
