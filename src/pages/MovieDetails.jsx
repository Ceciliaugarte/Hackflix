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
        <div className="movieDetail">
          <div className="row movie-box mb-3 mt-5">
            <div className="col-12 col-lg-4 img-box">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Movie-poster"
                  className="movie-img"
                />
              ) : (
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  alt="Movie-poster"
                  className="movie-img"
                />
              )}
            </div>
            <div className="col-12 col-lg-8 mb-4 ps-5  info-box">
              <h1 className="general-text display-3">{movie.title}</h1>
              <small className="text-secondary d-block">{movie.title}</small>
              <small className="mb-3 text-secondary">
                Release on {movie.release_date}
              </small>
              <hr />
              <p className="mt-3 general-text fs-4 fw-semibold">Overview:</p>
              <p className="mb-4 general-text fs-4">{movie.overview}</p>
              <p className="mt-3 general-text fs-4 fw-semibold">Popularity</p>
              <p className="mb-4 general-text fs-4">
                This movie has been already watched by{" "}
                <strong>{movie.popularity} people!</strong>
                {console.log(movie)}
              </p>
              <p className="mt-3 general-text fs-4 fw-semibold">Rating: </p>
              <p className="mb-4 general-text fs-4">
                {movie.vote_average.toFixed(1)} / 10
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4 d-grid">
          <NavLink className="btn text-center back-home" to="/">
            <i className="bi bi-arrow-left me-2"></i>
            Back home
          </NavLink>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
