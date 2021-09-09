import React from "react";

function Header({ loggedIn, handleLoggedInClick }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button>
        fontSize
      </button>
    </div>
  );
}

export default Header;
