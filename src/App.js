import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./components/Details";

function App() {
  const [movie, setMovies] = useState([]);
  const [total, setTotal] = useState([]);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c0c8f40c09633426b3d5a17223ca1ca8&language=ar"
    );
    setMovies(res.data.results);
    setTotal(res.data.total_pages);
  };

  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c0c8f40c09633426b3d5a17223ca1ca8&language=ar&page=${page}`
    );
    setMovies(res.data.results);
  };

  const getTotal = async (pageCount) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c0c8f40c09633426b3d5a17223ca1ca8&language=ar&${pageCount}`
    );
    setMovies(res.data.results);
  };

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=c0c8f40c09633426b3d5a17223ca1ca8`
      );
      setMovies(res.data.results);
      setTotal(res.data.total_pages);
    }
  };

  useEffect(() => {
    getAllMovies();
    getTotal();
  }, []);

  return (
    <div className="App">
      <Navbar search={search} />
      <Routes>
        <Route
          path="/"
          element={<HomePage movie={movie} getPage={getPage} total={total} />}
        />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
