import "../App.css";
import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <div className="navbar-container">
      <BootstrapNavbar
        expand="lg"
        className="nav-box py-2 px-5 navbar-dark"
        expanded={expanded}
      >
        <Container>
          <NavLink
            to="/"
            className="navbar-brand link-body-emphasis text-decoration-none"
          >
            <span className="hackflix fs-1">HACKFLIX</span>
          </NavLink>

          <BootstrapNavbar.Toggle
            aria-controls="navbarNav"
            className="bg-dark"
            onClick={handleNavbarToggle}
          />

          <BootstrapNavbar.Collapse id="navbarNav">
            <Nav className="ms-auto mt-3 ">
              <Nav.Item className="mb-2 mt-2">
                <NavLink
                  className="search-item rounded-pill border border-light-subtle text-bold text-light px-lg-3 py-lg-2 align-middle"
                  to="/search"
                  onClick={closeNavbar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search me-2 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>{" "}
                  <span className="search">SEARCH MOVIE</span>
                </NavLink>
              </Nav.Item>

              <Nav.Item className="nav-link ps-2 mb-2">
                <NavLink
                  className="nav-link py-0 about-us-link"
                  to="/about-us"
                  onClick={closeNavbar}
                >
                  ABOUT US
                </NavLink>
              </Nav.Item>

              <Nav.Item className="nav-link ps-2 mb-2">
                <NavLink
                  className="nav-link py-0"
                  to="/contact"
                  onClick={closeNavbar}
                >
                  CONTACT
                </NavLink>
              </Nav.Item>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
}

export default Navbar;
