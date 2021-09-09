import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState(12);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} />
    </div>
  );
}

export default App;
