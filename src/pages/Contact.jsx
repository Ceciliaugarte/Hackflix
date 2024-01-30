import { NavLink } from "react-router-dom";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="container my-5 pt-5 contact">
        <h1 className="text-center general-text mb-4 fw-bold ">CONTACT:</h1>
        <div className="row me-1">
          <div className="col-12 col-lg-4 contact-img-box">
            <img
              className="rounded-circle justify-content-center contact-img"
              src="https://avatars.githubusercontent.com/u/145774575?s=400&u=ba1d982fbd938c0a89a45fee3822d2a843115cc2&v=4"
              alt="CeciliaImg"
            />
          </div>
          <div className="col-12 col-lg-8 mt-lg-4 mx-3">
            <p className="general-text fs-5">
              This proyect was created by <strong>Cecilia Ugartemendia </strong>
            </p>
            <p className="general-text fs-5">
              I am a full stack developer who completed a 3-month, 600-hour
              bootcamp in 2023. As a junior participant, I underwent intensive
              training in both front-end and back-end development. Through
              hands-on projects, collaborative coding challenges, and
              mentorship, I acquired proficiency in various technologies and
              frameworks.
            </p>
            <p className="general-text fs-5">
              During the bootcamp, I worked on this project utilizing
              <strong> React</strong>, one of several undertaken to enhance my
              skills in web development. This immersive experience has equipped
              me to actively contribute to web development projects and
              continues to fuel my passion for learning and growth in this
              field.
            </p>
            <div>
              <p className="general-text fs-5 mt-2">
                Contact me on social networks:
              </p>
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
