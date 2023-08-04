import React from "react";
import "./Menu.scss";
export const Menu = () => {
  const menuItems = [
    {
      id: 1,
      link: "Acción",
      url: "#",
    },
    {
      id: 2,
      link: "Terror",
      url: "#",
    },
    {
      id: 3,
      link: "Ciencia Ficción",
      url: "#",
    },
    {
      id: 4,
      link: "Comedia",
      url: "#",
    },
  ];

  return (
    <>
      <ul className="categories">
        {menuItems.map((link) => (
          <li key={link.id} className="links__li">
            <a href={link.url} className="links__a">
              {link.link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;