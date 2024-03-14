import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Details() {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const getAllMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=c0c8f40c09633426b3d5a17223ca1ca8&&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div className="details">
      <div className="container">
        <div className="section-one">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="Movie"
          />
          <div className="section-details">
            <p>اسم الفيلم: {movie.title}</p>
            <p>تاريخ الفيلم: {movie.release_date}</p>
            <p>الشعبيه: {movie.popularity}</p>
            <p>عدد المقيمين: {movie.vote_count}</p>
            <p>متوسط التقييم: {movie.vote_average}</p>
            <div>
              النوع:{" "}
              {movie.genres &&
                movie.genres.map((gen) => {
                  return <span key={gen.id}>{gen.name}, </span>;
                })}
            </div>
          </div>
        </div>
        <div className="section-two">
          <h1>ملخص القصة: </h1>
          <p>{movie.overview ? movie.overview : "القصة غير متوفره"}</p>
        </div>
        <div className="btns">
          <Link to={"/"}>
            <button>القائمة الرئيسية</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
