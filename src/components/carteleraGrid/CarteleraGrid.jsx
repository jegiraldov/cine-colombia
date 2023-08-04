import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/GetMovies.jsx";
import CardCartelera from "../cardCartelera/CardCartelera.jsx";
import './CarteleraGrid.scss'

export function CarteleraGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(); // Aquí realiza la llamada a la API sin argumentos para obtener todas las películas.
      if (data && data.results) {
        const firstFiveMovies = data.results.slice(0, 5); // Esto lo usamos para mostrar solo las primeras 5 peliculas
        console.log(data.results);
        setMovies(firstFiveMovies);
      }
    };

    fetchData();
  }, []);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ul className="imagenes-grid">
        {movies.map((movie) => (
          <CardCartelera key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default CarteleraGrid;
