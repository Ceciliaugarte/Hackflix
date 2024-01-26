import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import useInput from "../components/UseInput";
import { NavLink } from "react-router-dom";

let totalPages;
function Search() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const inputTitle = useInput("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getFilteredMovies = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://api.themoviedb.org/3/search/movie",
          params: {
            api_key: "47c47491160da0f21768c993b889be38",
            include_adult: "false",
            include_video: "false",
            language: "en-US",
            query: inputTitle.value,
          },
        });
        totalPages = response.data.total_pages;
        setFilteredMovies(response.data.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    getFilteredMovies();
  }, [inputTitle.value]);

  return (
    filteredMovies && (
      <div>
        <header
          className="headerImg"
          style={{
            backgroundImage: `url("https://naanmedia.in/wp-content/uploads/2022/10/3658600.jpg")`,
          }}
        ></header>
        <div className="container my-4 search-box">
          <div className="row justify-content-center mb-2">
            <div className="col-8 d-grid">
              <form>
                <div className="mb-3 text-center">
                  <label
                    htmlFor="searchMovie"
                    className="form-label fw-bold fs-1 general-text mb-5"
                  >
                    SEARCH MOVIE:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="searchMovie"
                    aria-describedby="emailHelp"
                    placeholder="Enter a movie title..."
                    value={inputTitle.value}
                    onChange={inputTitle.onChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row m-1 movie">
            {filteredMovies.length === 0 && inputTitle.value !== "" ? (
              <div className="d-flex justify-content-center">
                <div
                  className="col-8 alert alert-danger text-center my-4"
                  role="alert"
                >
                  There are no matches with that title
                </div>
              </div>
            ) : (
              filteredMovies.map((filteredMovie, index) => (
                <Movie
                  movie={filteredMovie}
                  key={`${filteredMovie.id}_${index}`}
                />
              ))
            )}
          </div>
          <div className="d-flex justify-content-center my-4 d-grid">
            <NavLink
              className="btn text-center back-home"
              to="/"
              onClick={() => scrollToTop()}
            >
              {" "}
              <i className="bi bi-arrow-left me-2"></i>
              Back home
            </NavLink>
          </div>
        </div>
      </div>
    )
  );
}

export default Search;
