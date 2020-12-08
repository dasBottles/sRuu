import React from "react";
import { Styles } from "./styles.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Styles>
      <div className="">
        <nav class="nav flex-column align-items-center">
          <a class="navLink">
            {" "}
            <img
              src="https://cdn.betterttv.net/emote/5f9a8c436f583802e38a01a1/2x"
              alt="juliWow"
            />
          </a>
          <Link to="/">
            <a class="navLink h1">sleepyruu</a>
          </Link>
          <Link to="/commissions">
            <a class="navLink">Commissions</a>
          </Link>
          <Link to='/colortest'>
          <a class="navLink" >Interactive Color</a>
          </Link>
          <a class="navLink" href='https://twitter.com/sleepyruu' target='_blank'>Twitter</a>
        </nav>
      </div>
    </Styles>
  );
};

export default Navbar;
