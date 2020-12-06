import React from "react";
import { Styles } from "./styles.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Styles>
      <div className="container-fluid">
        <nav class="nav flex-column align-items-center bg-light ">
          <a class="nav-link">
            {" "}
            <img
              src="https://cdn.betterttv.net/emote/5f9a8c436f583802e38a01a1/2x"
              alt="juliWow"
            />
          </a>
          <Link to="/">
            <a class="nav-link h1">Sleepyruu</a>
          </Link>
          <Link to="/commissions">
            <a class="nav-link">Commissions</a>
          </Link>
          <a class="nav-link" href='https://twitter.com/sleepyruu' target='_black'>Twitter</a>
        </nav>
      </div>
    </Styles>
  );
};

export default Navbar;
