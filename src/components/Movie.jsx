import { useNavigate } from "react-router-dom";

function Movie({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-4" key={movie.id}>
      <button
        className="border-0 bg-transparent"
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="img"
          />
        ) : (
          <img src={"../../public/ffffff.jpg&text=Image+Not+Found"} alt="img" />
        )}
      </button>
      <p className="text-center p-3 text-white">{movie.title}</p>
    </div>
  );
}

export default Movie;
