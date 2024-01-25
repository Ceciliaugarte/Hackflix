import { NavLink } from "react-router-dom";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container my-5">
      <div className="row mx-5 my-5">
        <div className="col p-5">
          <h1 className="text-center general-text mb-4 contact fw-bold ">
            Contact:
          </h1>
          <p className="general-text fs-5">
            This proyect was created by <strong>Cecilia Ugartemendia </strong>
          </p>
          <p className="general-text fs-5">
            <span className="fw-bold">Direction: </span> Distinctio adipisci
            4566, Lorem ipsum.
          </p>
          <p className="general-text fs-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            iure vitae harum veritatis? Distinctio adipisci, sequi mollitia
            minima voluptate ipsa? Soluta ut ad ea nemo delectus dicta
            perspiciatis saepe nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi, soluta maxime veritatis architecto
            voluptates ex maiores consequuntur quidem asperiores ab blanditiis
            nihil, deserunt corporis sunt provident dolores totam non eos?
          </p>
        </div>
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
  );
}

export default Contact;
