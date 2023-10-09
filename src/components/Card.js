import { Link } from "react-router-dom";
function Card({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <img
        alt="Movie"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
      />
      <div className="data">
        <p>اسم الفيلم: {movie.original_title}</p>
        <p>تاريخ الأصدار: {movie.release_date}</p>
        <p>عدد التقيمات: {movie.vote_count}</p>
        <p>التقييم: {movie.vote_average}</p>
      </div>
    </Link>
  );
}

export default Card;
