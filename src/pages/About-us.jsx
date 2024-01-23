import { NavLink } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container my-5">
      <div className="row mx-5 my-4 g-4">
        <div className="col">
          <h1 className="text-center mb-4 about-us general-text fw-bold ">
            About Us:
          </h1>
          <p className="general-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            iure vitae harum veritatis? Distinctio adipisci, sequi mollitia
            minima voluptate ipsa? Soluta ut ad ea nemo delectus dicta
            perspiciatis saepe nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui est perspiciatis iusto ipsa, laborum quo!
            Tempora quam perferendis minima ducimus possimus nam id nihil. Sunt
            aspernatur veritatis ipsa ducimus accusamus?
          </p>
          <p className="general-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea
            laudantium exercitationem voluptates autem ut labore sit aliquid!
            Ipsam molestias quasi assumenda blanditiis maxime quibusdam illo ex
            repellat corporis tempora!
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center my-4 d-grid">
        <NavLink className="btn text-center back-home" to="/">
          {" "}
          <i className="bi bi-arrow-left me-2"></i>
          Back home
        </NavLink>
      </div>
    </div>
  );
}

export default AboutUs;
