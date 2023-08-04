import axios from 'axios';

  const API = 'https://api.themoviedb.org/3/';
  const API_KEY = '23a6afa0e771969ea423036782880665';

  // funcion para realizar la peticion get a la api
  export const fetchMovies = async () => {

    try{
      // const API_KEY = "23a6afa0e771969ea423036782880665";
      const API_URL = `${API}movie/now_playing?api_key=${API_KEY}&language=es-MX`;
      const {data} = await axios.get(API_URL);
        //console.log(data)
        return data
    } catch (error) {
      console.log(error);
      return null;

    }
  
  } 

  export const fetchGenre = async () => {
    try{
      const API_URL = `${API}genre/movie/list?api_key=${API_KEY}`;
      const {data} = await axios.get(API_URL);
        //console.log(data)
        return data
    } catch (error) {
      console.log(error);
      return null;
    }
  }

    //console.log('data',results);
    //setSelectedMovie(results[0])
