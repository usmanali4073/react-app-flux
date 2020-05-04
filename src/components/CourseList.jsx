import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CourseList extends Component {
  //   constructor(props) {
  //     super(props);

  //   }

  render() {
    return (
      <React.Fragment>
        <div>
          <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {this.props.courses.map((obj) => {
                return (
                  <React.Fragment key={obj.id}>
                    <tr>
                      <td>{obj.title}</td>
                      <td>{obj.authorId}</td>
                      <td>{obj.category}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

CourseList.prototypes = {
  courses: PropTypes.array.isRequired,
};
