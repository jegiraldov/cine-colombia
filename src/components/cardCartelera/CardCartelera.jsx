import React from "react";
import './CardCartelera.scss'

export function CardCartelera({movie}) {
  if (!movie || !movie.poster_path) {
    return null; // Si no hay datos de película o no hay poster_path, no renderizar nada
  }

  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  return (
    <>
      <div className="cardCartelera-conteiner">
        <li className="li-imagenes-cartelera">
          <img
            className="li-imagenes__img-desktop"
            src={imageUrl}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <section>
            <p>Titulo en ingles: {movie.original_title}</p>
            <p>Estreno: {movie.release_date}</p>
            {/* <p>Genero: {movie.}</p> */}
          </section>
        </li>
      </div>
    </>
  );
}

export default CardCartelera;
