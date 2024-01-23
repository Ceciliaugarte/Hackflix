import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalInfo from "./ModalInfo";

function Footer() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-3">
            <div className="column-box">
              <h6 className="subtitle">HACKFLIX</h6>
              <div className="icons">
                <a href="https://www.linkedin.com/in/cecilia-ugartemendia/">
                  <i class="bi bi-linkedin icon fs-5"></i>
                </a>
                <a href="https://github.com/Ceciliaugarte">
                  <i class="bi bi-github icon fs-5 ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 ">
            <div className="column-box">
              <h6 className="subtitle">Company</h6>
              <ul className="items">
                <li
                  onClick={() => {
                    navigate("/about-us");
                    scrollToTop();
                  }}
                >
                  About us
                </li>
                <li
                  onClick={() => {
                    navigate("/contact");
                    scrollToTop();
                  }}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="column-box">
              <h6 className="subtitle">Legal</h6>
              <ul className="items">
                <li onClick={() => setModalShow(true)}>Privacy Policy</li>
                <li onClick={() => setModalShow(true)}>Terms and Conditions</li>
                <li onClick={() => setModalShow(true)}>Licence</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="Copyright">
          <small className="copy-items">
            &copy; Hack Academy &middot; Cecilia Ugartemendía
          </small>
          <small className="copy-items">
            <span className="Privacy" onClick={() => setModalShow(true)}>
              Privacy Policy
            </span>
            &middot;
            <span className="Privacy" onClick={() => setModalShow(true)}>
              Terms & Conditions
            </span>
          </small>
        </div>
      </div>
      <ModalInfo modalShow={modalShow} setModalShow={setModalShow} />
    </footer>
  );
}

export default Footer;
