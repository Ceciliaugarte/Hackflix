import { NavLink } from "react-router-dom";

function AboutUs() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container my-5">
      <div className="row mx-5 my-5 g-4">
        <div className="colsp-5">
          <h1 className="text-center mb-4 about-us general-text fw-bold ">
            About us:
          </h1>
          <p className="general-text fs-5">
            Step into the world of Hackflix, where movie magic meets the
            convenience of online streaming. As a premier platform, Hackflix
            offers a curated selection of films, ensuring a captivating
            cinematic adventure right at your fingertips.
          </p>
          <p className="general-text fs-5">
            Navigating through our user-friendly interface, you'll discover a
            treasure trove of movies spanning various genres. From Hollywood
            blockbusters that keep you on the edge of your seat to independent
            gems waiting to be uncovered, Hackflix caters to the diverse tastes
            of every movie enthusiast.
          </p>
          <p className="general-text fs-5">
            Our goal is to provide you with a seamless streaming experience,
            bringing the latest releases, timeless classics, and hidden gems
            directly to your screen. Whether you're in the mood for thrilling
            tales or heartwarming narratives, Hackflix is your go-to destination
            for cinematic exploration
          </p>
          <p className="general-text fs-5">
            With Hackflix, the joy of discovering and enjoying exceptional films
            is just a click away. Elevate your movie nights and immerse yourself
            in a world of entertainment crafted just for you.
          </p>
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
  );
}

export default AboutUs;
