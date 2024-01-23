import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function MovieDetails(props) {
  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${params.id}`,
          params: {
            api_key: "47c47491160da0f21768c993b889be38",
          },
        });
        setMovie(response.data);
      } catch (err) {
        setIsError({ code: err.code });
      }
    };
    getMovie();
  }, []);

  if (isError) {
    return (
      <div className="alert alert-info text-center" role="alert">
        No se encontró la película
      </div>
    );
  } else {
    return !movie ? (
      <div
        className="spinner-border text-secondary justify-content-center"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <div className="container">
        <div className="row justify-content-center movieDetail">
          <div className="col-6 justify-content-center g-3">
            <h1 className="text-center mb-3 mt-5 general-text">
              {movie.title}{" "}
            </h1>
            <div className="text-center mb-3">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Movie-poster"
                />
              ) : (
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  alt="Movie-poster"
                />
              )}
            </div>
            <p className="mb-3 general-text">
              <span className="fw-semibold fs-5">Fecha de publicación: </span>
              {movie.release_date}
            </p>
            <p className="mb-3 general-text">
              <span className="fw-semibold fs-5">Resumen: </span>{" "}
              {movie.overview}
            </p>
            <p className="mb-3 general-text">
              <span className="fw-semibold fs-5">Rating: </span>{" "}
              {movie.vote_average}
            </p>
          </div>
          <div className="d-flex justify-content-center my-4 d-grid">
            <NavLink className="btn text-center back-home" to="/">
              <i className="bi bi-arrow-left me-2"></i>
              Back home
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
