import "../App.css";
import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { NavLink } from "react-router-dom";
import Pages from "../components/Pages";

let totalPages;
function Movies(props) {
  const [rating, setRating] = useState(5);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    const getMovies = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          api_key: "47c47491160da0f21768c993b889be38",
          page: page,
          include_adult: "false",
          include_video: "false",
          language: "en-US",
          "vote_average.gte": rating * 2 - 2,
          "vote_average.lte": rating * 2,
        },
      });
      totalPages = response.data.total_pages;
      setMovies(response.data.results);
    };
    getMovies();
  }, [rating]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          api_key: "47c47491160da0f21768c993b889be38",
          page: page,
          include_adult: "false",
          include_video: "false",
          language: "en-US",
          "vote_average.gte": rating * 2 - 2,
          "vote_average.lte": rating * 2,
        },
      });
      totalPages = response.data.total_pages;
      setMovies(response.data.results);
    };
    getMovies();
  }, [page]);

  return (
    <div className="container">
      <div>
        <p className="text-center mt-2 pt-3 fs-4 fw-semibold mb-0">
          Filtrar por Rating & Mas
        </p>
        <div className="d-flex justify-content-center">
          <ReactStars
            count={5}
            onChange={(newValue) => setRating(newValue)}
            size={36}
            activeColor="#ffd700"
          />
        </div>
      </div>

      {movies ? (
        <div className="row m-1 movie">
          {movies.map((movie, index) => (
            <Movie movie={movie} key={`${movie.id}_${index}`} />
          ))}
        </div>
      ) : (
        <div className="alert alert-info text-center" role="alert">
          No hay películas para mostrar
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-3 pages">
          <Pages page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}

export default Movies;