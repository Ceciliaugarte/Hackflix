import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import useInput from "../components/UseInput";

let totalPages;
function Search(props) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const inputTitle = useInput("");

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
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-8 my-4 d-grid">
            <form>
              <div className="mb-3 text-center">
                <label
                  htmlFor="searchMovie"
                  className="form-label fw-bold fs-3 py-5"
                >
                  Search Movie
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
              <div className="col-8 alert alert-info text-center" role="alert">
                No se una película con ese titulo
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
      </div>
    )
  );
}

export default Search;
