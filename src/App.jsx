import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./views/home/Home.jsx";
import Login from "./views/Login/Login.jsx";
import Movie from "./views/movie/Movie.jsx";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/movie" element={< Movie/>} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;