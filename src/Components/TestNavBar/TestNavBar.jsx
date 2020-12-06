import React from "react";
import { Styles } from "../Navbar/styles";
import { Link } from "react-router-dom";
const NavbarButtons = () => {
    
  return (
    <Styles>
      <div className='container'>
        <button id='bannerColor'>Change Banner Color</button>
        <button id='textColor'>Change Text Color</button>
      </div>

    </Styles>
  );
};

export default NavbarButtons;
