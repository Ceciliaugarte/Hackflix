import Carousel from "react-bootstrap/Carousel";

function CarouselMovies() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div
          className="headerImg"
          style={{
            backgroundImage: `url("https://images.hdqwalls.com/wallpapers/spider-man-the-noir-4k-uu.jpg")`,
          }}
        ></div>
        <Carousel.Caption>
          <h3>All your Favourite Movies in One Place</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="headerImg"
          style={{
            backgroundImage: `url("https://images.hdqwalls.com/wallpapers/movie-wall-e-ad.jpg")`,
          }}
        ></div>
        <Carousel.Caption>
          <h3>From Classics to Cult Favorites: Discover Them All!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="headerImg"
          style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/1227081.jpg")`,
          }}
        ></div>
        <Carousel.Caption>
          <h3>Movie Madness at Your Fingertips</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMovies;
