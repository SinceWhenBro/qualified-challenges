import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import NoMatch from "./NoMatch"


function App () {
  return (
    // No need to add <Router>, it has been added to ./index.js
      <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
        <Switch>
          <Route exact path="/">
            <h2>Welcome to the home page</h2>
          </Route>
          <Route path="/about"> 
            <h2>You are on the about page</h2>
          </Route>
          <Route path="/contact">
            <h2>Please feel free to email us</h2>
          </Route>
          <Route>
            <NoMatch/>
          </Route>
          </Switch>
       </div>
  );
}

export default App;
