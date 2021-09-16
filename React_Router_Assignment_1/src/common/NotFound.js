import React from "react";
import { Link } from "react-router-dom";

/*
  TODO: Change the <a> below to a <Link> to the home page
*/

export const NotFound = () => (
  <main className="container">
    <p>Page not found!</p>
    <p>
      <a>Return Home</a>
    </p>
  </main>
);

export default NotFound;
