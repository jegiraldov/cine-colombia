import React from 'react';
import '../cardSwiper/CardSwiper.scss'
import { useEffect, useState } from 'react';
import { fetchGenre } from '../../services/GetMovies';

export function CardSwiper({ movie }) {

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  useEffect(() => {
    fetchGenre().then((data) => {
      console.log(data);
    });
  }, [])

  //Funcion para convertir la fecha en formato ejemplo 22 jun 2023 con este dato {movie.release_date} 

  return (
    <>
    {
      !movie && !movie.poster_path ? <p>No hay pelicula</p> : 
      (
      <div className="card-container">
        <img 
            className="li-imagenes__img-desktop"
            src={imageUrl}
            alt={movie.title}
          />
        <div className="info-movie">
          <div className="info">
            <h2>{movie.title}</h2>
            <p>Estreno: {movie.release_date}</p>
          </div>
        </div>
      </div>
      )
    }
    </>
  );
}

export default CardSwiper;