import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movie, setMovie] = useState([]);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c0c8f40c09633426b3d5a17223ca1ca8&language=ar"
    );
    setMovie(res.data.results);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=c0c8f40c09633426b3d5a17223ca1ca8`
      );
      setMovie(res.data.results);
    }
  };

  return (
    <div className="App">
      <Navbar search={search} />
      <Routes>
        <Route path="/" element={<HomePage movie={movie} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
