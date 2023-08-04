import React, { useState } from "react";
import './CinemasBar.scss'
export function CinemasBar() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="cinemasBar-conteiner">
        <label htmlFor="selectOption">Cines cercanos</label>
        <select
          className="cinemasbar"
          id="selectOption"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="">Seleccionar</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          {/* Agrega más opciones según tus necesidades */}
        </select>
      </div>
    </>
  );
}

export default CinemasBar;
