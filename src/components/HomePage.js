import Card from "./Card";
import Error from "./Error";
import Pagination from "./Pagination";

function HomePage({ movie, getPage, total }) {
  return (
    <main className="home-page">
      <div className="container">
        <div className="content">
          {movie.length >= 1 ? (
            movie.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })
          ) : (
            <Error />
          )}
          {movie.length < 1 ? null : (
            <Pagination getPage={getPage} total={total} />
          )}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
