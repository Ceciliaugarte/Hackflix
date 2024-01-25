import { NavLink } from "react-router-dom";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header
        className="headerImg"
        style={{
          backgroundImage: `url("https://naanmedia.in/wp-content/uploads/2022/10/3658600.jpg")`,
        }}
      ></header>
      <div className="container my-5">
        <h1 className="text-center general-text mb-4 contact fw-bold ">
          Contact:
        </h1>
        <div className="row me-1">
          <div className="col-12 col-lg-4 contact-img-box">
            <img
              className="rounded-circle justify-content-center contact-img"
              src="https://avatars.githubusercontent.com/u/145774575?s=400&u=ba1d982fbd938c0a89a45fee3822d2a843115cc2&v=4"
              alt="CeciliaImg"
            />
          </div>
          <div className="col-12 col-lg-8 mt-lg-4">
            <p className="general-text fs-5">
              This proyect was created by <strong>Cecilia Ugartemendia </strong>
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
            <div>
              <a
                href="https://www.linkedin.com/in/cecilia-ugartemendia/"
                target="_blank"
              >
                <i className="bi bi-linkedin display-4 icon"></i>
              </a>
              <a href="https://github.com/Ceciliaugarte" target="_blank">
                <i className="bi bi-github display-4 ms-4 icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5 d-grid">
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
  );
}

export default Contact;
