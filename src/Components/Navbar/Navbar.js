import React from "react";
import { Styles } from "./styles.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Styles>
      <div className="container-fluid header justify-content-center">
        <div className='row justify-content-center'>
            <img className='logoImg' src="https://cdn.betterttv.net/emote/5f9a8c436f583802e38a01a1/2x" alt="juliWow" />
        </div>
        <div className= 'row justify-content-center'>
        <Link to="/">
            <a className="navLink h1">sleepyruu</a>
          </Link>
        </div>
        <div className='row'>
          <div className='col'>
            <ul className="nav justify-content-center">
              <li className='nav-item'>
                <Link to="/commissions">
                  <a className='nav-link'>Commissions</a>
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='https://twitter.com/sleepyruu' target='_blank'>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Navbar;
