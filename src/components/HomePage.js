import Card from "./Card";
import Error from "./Error";

function HomePage({ movie }) {
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
        </div>
      </div>
    </main>
  );
}

export default HomePage;
