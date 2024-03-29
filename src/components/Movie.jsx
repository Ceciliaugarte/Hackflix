import { useNavigate } from "react-router-dom";

function Movie({ movie }) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-4" key={movie.id}>
      <button
        className="border-0 bg-transparent"
        onClick={() => {
          navigate(`/movie/${movie.id}`);
          scrollToTop();
        }}
      >
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie-poster"
          />
        ) : (
          <img
            src="https://dummyimage.com/286x429/707070/fff&text=404-Image+Not+Found"
            alt="Movie-poster"
          />
        )}
      </button>
      <p className="text-center p-3 text-white">{movie.title}</p>
    </div>
  );
}

export default Movie;
