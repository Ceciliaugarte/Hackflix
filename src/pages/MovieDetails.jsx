import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import YouTube from "react-youtube";

function MovieDetails(props) {
  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  const convertRunTime = (min) => {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    const formattedTime =
      hours > 0 ? `${hours}hr ${minutes}min` : `${minutes}min`;

    return formattedTime;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${params.id}`,
          params: {
            api_key: "47c47491160da0f21768c993b889be38",
            append_to_response: "videos",
          },
        });
        if (
          response.data.videos &&
          response.data.videos.results &&
          response.data.videos.results.length > 0
        ) {
          const trailer = response.data.videos.results.find(
            (vid) => vid.name === "Official Trailer"
          );
          setTrailer(trailer || response.data.videos.results[0]);
        }
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
      <div className="justify-content-center align-items-center">
        <header
          className="headerImg"
          style={{
            backgroundImage: `url("https://dummyimage.com/1800x728/262626/262626&text=Image+not+Found")`,
          }}
        ></header>
        <div>
          <div
            className="spinner-border text-secondary justify-content-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <header
          className="headerImg movieDetail"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          }}
        ></header>
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
                    src="https://dummyimage.com/286x429/707070/fff&text=404-Image+Not+Found"
                    alt="Movie-poster"
                    className="movie-img"
                  />
                )}
                {trailer ? (
                  playing ? (
                    <div>
                      <div className="video-container">
                        <YouTube
                          videoId={trailer.key}
                          className="reproductor"
                          containerClassName="youtube-container"
                          opts={{
                            width: "100%",
                            height: "100%",
                            playerVars: {
                              autoplay: 1,
                              controls: 0,
                              cc_load_policy: 0,
                              fs: 0,
                              iv_load_policy: 0,
                              modestbranding: 0,
                              rel: 0,
                              showinfo: 0,
                            },
                          }}
                        />
                        <button
                          className="close btn btn-dark mb-3 me-5"
                          onClick={() => setPlaying(false)}
                        >
                          Close Trailer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="btn trailer-btn rounded fs-5 ms-4"
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Play Trailer
                    </button>
                  )
                ) : (
                  <h6 className="text-white mt-3 ms-4 no-available">
                    No trailer available
                  </h6>
                )}
              </div>
              <div className="col-12 col-lg-8 mb-4 ps-5  info-box">
                <h1 className="general-text display-3">{movie.title}</h1>
                <p className="text-secondary d-block fw-bold">{movie.title}</p>
                <span className="mb-3 text-secondary fw-bold">
                  Release on {movie.release_date} &middot;{" "}
                  {convertRunTime(movie.runtime)}
                </span>
                <hr />
                <p className="mt-3 general-text fs-4 fw-semibold">Overview:</p>
                <p className="mb-4 general-text fs-4">{movie.overview}</p>
                <p className="mt-3 general-text fs-4 fw-semibold">
                  Popularity:
                </p>
                <p className="mb-4 general-text fs-4">
                  This movie has been already watched by{" "}
                  <strong className="text-popularity">
                    {movie.popularity} people!
                  </strong>
                  {console.log(movie)}
                </p>
                <p className="mt-3 general-text fs-4 fw-semibold">Rating: </p>
                <p className="mb-4 general-text fs-4">
                  {movie.vote_average.toFixed(1)} / 10
                </p>
                <hr />
                {movie.production_companies.length > 0 &&
                movie.production_countries.length > 0 ? (
                  <small className="text-secondary">
                    Produced by{" "}
                    <strong>{movie.production_companies[0].name}</strong>
                    <strong>
                      {" "}
                      &middot; {movie.production_countries[0].name}
                    </strong>
                  </small>
                ) : null}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center my-4 d-grid">
            <NavLink
              className="btn text-center back-home"
              to="/"
              onClick={() => scrollToTop()}
            >
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
