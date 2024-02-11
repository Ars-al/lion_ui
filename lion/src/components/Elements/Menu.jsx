import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import ConCard from "./ConCard";
import Footer from "./Footer";
import Header from "./Header";
import {
  BiCheck
} from "react-icons/bi ";

const menu = () => {
  return (
    <>
      <Header />

      <section className="pt-5">
        <div className="container">
          <div className="ms-3">
            <h3 className="text-white">Raffles</h3>
          </div>
          <div className="d-lg-flex justify-content-between  mt-4">
            <div className="text-lg-start text-center">
              <button className="btn-global-2 ms-3 fs-7 fw-500 mt-lg-0 mt-2">
                Lorem Ipsum
              </button>
              <button className="btn-global-3 ms-2 fs-7 fw-500 mt-lg-0 mt-2">
                Dummy
              </button>
              <button className="btn-global-3 ms-2 fs-7 fw-500 mt-lg-0 mt-2">
                Lorem
              </button>
              <button className="btn-global-3 ms-2 fs-7 fw-500 mt-lg-0 mt-2">
                Dummy
              </button>
              <button className="btn-global-3 ms-2 fs-7 fw-500 mt-lg-0 mt-2">
                Text
              </button>
              <button className="btn-global-3 ms-2 fs-7 fw-500 mt-lg-0 mt-2">
                Lorem
              </button>
            </div>

            <div className="d-flex justify-content-center">
              <div className="dropdown-div text-lg-start text-center mt-lg-0 mt-3">
                
                {/* <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-btn dropdown-toggle fw-500 active text-decoration-none text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Recently created
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item disabled" href="#">
                        Sort by
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <a className="dropdown-item" href="#">
                        Recently added
                      </a>
                      <i className="fa-solid check-emoji fa-check me-3" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Price: Low to Hight
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Price: Hight to Low
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Auction ending soon
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item disabled" href="#">
                        Option
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <a className="dropdown-item" href="#">
                        Show lazy minted
                      </a>
                      <div className="form-check form-switch me-1">
                        <input
                          className="form-check-input switch-btn nofocus"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <a className="dropdown-item" href="#">
                        Verified only
                      </a>
                      <div className="form-check form-switch me-1">
                        <input
                          className="form-check-input switch-btn nofocus"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </li>
                  </ul>
                </div> */}

                <Nav className="">
                <NavDropdown
                  className="dropdown-btn"
                  title="Recently Created"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1" disabled>Sort by</NavDropdown.Item>
                  <NavDropdown.Item className="d-flex justify-content-between align-items-center" href="#action/3.2">
                  <span className=""> Recently added</span> <span className="me-3"><BiCheck className="bs-check"/></span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                  Price: Low to Hight
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                  Price: Hight to Low
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                  Auction ending soon
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6" disabled>
                  Option
                  </NavDropdown.Item>
                  <NavDropdown.Item className="d-flex justify-content-between align-items-center" href="#action/3.7">
                  <span> Show lazy minted</span><div className="form-check form-switch me-1">
                        <input
                          className="form-check-input switch-btn nofocus"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="d-flex justify-content-between align-items-center" href="#action/3.7">
                  <span> Verified Only</span><div className="form-check form-switch me-1">
                        <input
                          className="form-check-input switch-btn nofocus"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default menu;
