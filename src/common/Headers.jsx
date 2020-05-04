import React, { Component } from "react";

export default class Headers extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/courses">Courses</a>
        </nav>
      </div>
    );
  }
}
