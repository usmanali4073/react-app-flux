import React, { Component } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
export default class CoursesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    getCourses().then((res) => {
      console.log(res);
      this.setState({
        courses: res,
      });
    });
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  componentWillUnmount() {
    console.log("Componet Removed");
  }

  render() {
    return <CourseList courses={this.state.courses} />;
  }
}
