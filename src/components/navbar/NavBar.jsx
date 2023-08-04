import React from "react";
import Menu from "../menu/Menu.jsx";
import CinemasBar from "../cinemasBar/CinemasBar.jsx";
import FechaBar from "../fechaBar/FechaBar.jsx";
import "./NavBar.scss"

function NavBar() {
  return (
    <>
      <div className="navbar-conteiner">
        <div className="left">
          <img src="./src/assets/logo-cine-colombia.jpg" alt="" />
          <h3>CINE COLOMBIA</h3>
        </div>
        <div className="menu-conteiner">
          <Menu />
        </div>
        <div className="right">
          <CinemasBar />
          <FechaBar />
          <i class="bi bi-person"></i>
        </div>
      </div>
    </>
  );
}

export default NavBar;
