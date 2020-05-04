import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Headers extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          |<NavLink to="/about">About</NavLink> |{" "}
          <NavLink to="/courses">courses</NavLink>
        </nav>
      </div>
    );
  }
}
