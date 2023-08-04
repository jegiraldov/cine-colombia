import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { fetchMovies } from "../../services/GetMovies.jsx";
import { CardSwiper } from "../cardSwiper/CardSwiper.jsx";
import './Swiper.scss'




export function Swiper() {
  const [movies, setMovies] = useState([]);
  //const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(); // Aquí realiza la llamada a la API sin argumentos para obtener todas las películas.
      if (data && data.results) {
        const firstFiveMovies = data.results.slice(0, 5);
        console.log(data.results);
        setMovies(firstFiveMovies);
        //setMoviesList(data.results)
      }
    };

    fetchData();
  }, []);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Carousel className="carousel"
      withIndicators
      height={402}
      slideSize="20%"
      loop dragFree
      slideGap="xl"
      align="start"
  
    >
      {movies.map((movie, index) => (
        <Carousel.Slide className="carousel-slide" key={index} >
          {" "}
          <CardSwiper key={movie.id} movie={movie} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default Swiper;
