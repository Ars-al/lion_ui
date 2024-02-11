import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa ";

const Footer = () => {
  return (
    <>
      <section className="footer profile-f-bg mt-5">
        <div className="container-fluid footer-bg">
          {/* <div class="blur-div"> */}
          {/* </div>
            <div class="black-div">

            </div> */}
          <footer className="text-center text-lg-start text-muted">
            <section className>
              <div className="container text-center text-md-start mt-5">
                <div className="d-lg-flex flex-wrap mt-3 gap-5 align-items-center">
                  <div className="mx-auto mb-4 fs-8">
                    <div>
                      <a href="index.html">
                        <img src="assets/images/logo.png" alt="" />
                      </a>
                    </div>
                    <div className="d-flex flex-wrap justify-content-lg-start justify-content-center gap-2 pt-3">
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
                    <p className="pt-3">
                      Copyright © 2022 RaffleKingz. All rights reserved.
                    </p>
                  </div>
                  <div className="d-flex flex-wrap gap-lg-5 gap-4">
                    <div className=" mx-auto mb-lg-4 mb-0 mt-3  a-color4 fs-8">
                      <p className="fw-500 fs-7 text-white mb-4">Lorem Ipsum</p>
                      <p>Lorem</p>
                      <p>Lorem</p>
                      <p>Lorem</p>
                    </div>

                    <div className=" mx-auto  mb-lg-4 mb-0 mt-3  a-color4 fs-8">
                      <p className="fw-500 fs-7  text-white mb-4 ">Lorem</p>
                      <p>Lorem</p>
                      <p>Lorem</p>
                      <p>Lorem</p>
                    </div>

                    <div className=" mx-auto mb-lg-4 mb-0 mt-3  a-color4 fs-8">
                      <p className="fw-500 fs-7  text-white mb-4 ">Lorem</p>
                      <p>Lorem</p>
                      <p>Lorem</p>
                      <p>Lorem</p>
                    </div>

                    <div className=" mx-auto mb-lg-4 mb-0  mt-3 a-color4 fs-8">
                      <p className="fw-500 fs-7  text-white mb-4 ">
                        My Account
                      </p>
                      <p>My Profile</p>
                      <p>My Wallet</p>
                    </div>
                    
                    <div className=" mx-auto mb-md-0 mb-lg-4 mb-0 mt-3 text-light fs-8">
                      <p className="fw-500 fs-7  mb-4">Subscribe Us</p>
                      <p className="a-color4">
                        Signup fo rour newletter to get the latest news{" "}
                        <br className="d-lg-block d-none" /> in your box.
                      </p>
                      <div className="input-div">
                        <input
                          type="email"
                          className="form-control nofocus home-input"
                          placeholder="Info@yourgmail.com"
                        />
                        <button className="share-btn">
                          <img src="assets/images/share.png" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;
