import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {
    FaTwitter,
    FaFacebook,
  } from "react-icons/fa ";

const Profile = () => {
  return (
   <>
   <Header />

   <section className="mt-5">
          <div>
            <img src="assets/images/profilemain.png" className="img-fluid" alt="" />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row ms-lg-2">
              <div className="col-lg-3 col-12 position-r pt-lg-0 pt-3">
                <div className=" a-color2 pt-3 side-1r">
                  <div className="d-flex justify-content-center">
                    <div className="round-div"><img src="assets/images/cardimg.png" className="w-100 h-100" alt="" /></div>
                  </div>
                  <div className="text-white text-center mt-2">
                    <h5 className="mb-1"> Francisco Maia</h5>
                    <p className="mb-2 fs-7"><img src="assets/images/profile shape.png" className="me-1" alt="" /> 0x59485…82590</p>
                    <p className="a-color4 fs-7 mb-1">8,888 NFTs of beautiful, Asian women <br className="d-lg-block d-none" />
                      painstakingly-crafted where even the <br className="d-lg-block d-none" /> most intricate</p>
                    <div className="d-flex gap-3 justify-content-center">
                      <FaFacebook className="  text-white fs-5" />
                      <FaTwitter className="  text-white fs-5" />
                    </div>
                  </div>
                  <div className="mt-4 text-center pb-3 mb-2">
                    <button className="btn-global-1 fw-600">Edit Profile Picture</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-12 text-white pt-lg-4 pt-5">
                <h3 className="text-lg-start text-center">Edit Profile</h3>
                <div className="pt-3">
                  <h6 className="text-lg-start text-center">Contact details</h6>
                  <div className="mb-2 mt-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label a-color4">Username</label>
                    <input type="name" className="form-control nofocus profile-input" id="exampleFormControlInput1" placeholder="Francisco Maia" />
                  </div>
                  <div className>
                    <label htmlFor="exampleFormControlInput1" className="form-label a-color4">Email Address</label>
                    <input type="email" className="form-control nofocus profile-input" id="exampleFormControlInput1" placeholder="seb.bennett@gmail.com" />
                  </div>
                </div>
                <div className="mt-4 text-lg-start text-center">
                  <button className="btn-global fw-500">Update Settings</button>
                </div>
              </div>
            </div>
          </div>
        </section>
   
   
   <Footer />
   </>
  )
}

export default Profile