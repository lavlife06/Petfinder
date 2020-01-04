import React from "react";
import { render } from "react-dom";
// import ReactDom from 'react-dom';
import Searchparams from "./Searchparams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div className="main-div">
        <header>
          <Link to="/">Adopt me!!</Link>
        </header>
        <Router>
          <Searchparams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
export default App;

render(<App />, document.getElementById("root"));
