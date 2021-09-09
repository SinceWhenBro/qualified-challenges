import React from "react";

function Content({ loggedIn, fontSize }) {
  return loggedIn && <p font-size={fontSize + 2}>CONTENT</p>;
}

export default Content;
