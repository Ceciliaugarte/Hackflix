import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="nav-box py-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="justify-content-center">
              <NavLink
                to="/"
                className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
              >
                <span className="hackflix fs-1">HACKFLIX</span>
              </NavLink>
            </div>
            <ul className="nav justify-content-end align-items-center py-2">
              <li className="nav-item">
                <NavLink
                  className="nav-link rounded-pill border border-light-subtle text-bold text-light"
                  to="/search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  Search movie
                </NavLink>
              </li>
              <li className="nav-link ps-4">
                <NavLink className="nav-link py-0" to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="nav-link ps-2">
                <NavLink className="nav-link  py-0" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
