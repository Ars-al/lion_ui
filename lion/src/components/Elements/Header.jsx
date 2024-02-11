import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa ";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="transperent" className="py-4" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <span className="">
                <img
                  src="assets/images/logo.png"
                  className="togglelogo"
                  alt=""
                />
              </span>
            </Link>
          </Navbar.Brand>
          <div className="d-lg-none align-items-center gap-2 d-flex">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span>
                <img src="/assets/images/hum.svg" alt="" />
              </span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav className="me-auto ">
                <NavDropdown
                  className="mx-auto text-warning"
                  title="Home"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav className="me-auto ">
                <NavDropdown
                  className="mx-auto text-warning"
                  title="Explore"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav className="me-auto ">
                <NavDropdown
                  className="mx-auto text-warning"
                  title="Pages"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav.Link className="fw-400  mx-lg-2 ">
                <Link to="/profile">Create</Link>
              </Nav.Link>
              <Nav.Link className="fw-400  mx-lg-2 ">
                <Link to="/detail"> Blog</Link>
                </Nav.Link>
              <Nav.Link className="fw-400  mx-lg-2 ">
                <Link to="/menu"> Contact</Link>
                </Nav.Link>
            </Nav>

            <Nav className="ms-auto mt-lg-0 mt-3">
              <div className="d-flex justify-content-lg-start justify-content-center gap-2 ">
                <div className="icon-bg">
                  <FaTwitter className="  text-white fs-5" />
                </div>
                <div className="icon-bg">
                  <FaFacebook className="  text-white fs-5" />
                </div>
                <div className="icon-bg">
                  <FaTelegram className="  text-white fs-5" />
                </div>
                <div className="icon-bg">
                  <FaYoutube className="  text-white fs-5" />
                </div>
                <div className="icon-bg">
                  <FaTiktok className="  text-white fs-5" />
                </div>
                <div className="icon-bg">
                  <FaDiscord className="  text-white fs-5" />
                </div>
              </div>
              <div className="container text-lg-start text-center">
                <Link to="/aboutpage">
                <button class="btn-global ms-4 fs-7 mt-lg-0 mt-3">
                  Connect Wallet
                </button></Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
