import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Adopt Me</Link>
        </li>
        <li>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
