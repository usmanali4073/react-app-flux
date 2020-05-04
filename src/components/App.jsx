import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Headers from "../common/Headers";
import CoursesPage from "./CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") {
      return <About />;
    } else if (route === "/courses") {
      return <CoursesPage />;
    }
    return <HomePage />;
  }

  return (
    <React.Fragment>
      <Headers />
      {getPage()}
    </React.Fragment>
  );
}
export default App;
