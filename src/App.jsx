import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import AboutUs from "./pages/About-us";
import Contact from "./pages/Contact";
import MovieId from "./components/MovieId";
import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/pelicula/:id" element={<MovieId />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="*"
            element={
              <h1 className="text-center my-4">Error 404 - Not Found!</h1>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
