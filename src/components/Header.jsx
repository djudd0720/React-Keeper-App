import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

//using material-ui icon called Hightlight in header
function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
