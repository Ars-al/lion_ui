import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {
    FaCloudUploadAlt
  } from "react-icons/fa ";


const Aboutpage = () => {
  return (
    <>
    <Header />

    <section className="mt-5 ms-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text-white text-lg-start text-center">
                <h3>Add New Raffle</h3>
              </div>
              <div className="pt-4 text-lg-start text-center">
                <h6 className="text-white mb-1">Choose blockchain</h6>
                <p className="a-color4 fs-7">Connect with one of our available wallet providers or create a new one.</p>
              </div>
              <div className="d-flex flex-wrap gap-2 justify-content-lg-start justify-content-center  ">
                <div className="btn-global-5 fs-7" type="submit"><img src="assets/images/Metamask.png" alt="" /> MetaMask
                </div>
                <div className="btn-global-5 fs-7" type="submit"><img src="assets/images/shape.png" alt="" /> Coinbase
                </div>
                <div className="btn-global-5 fs-7" type="submit"><img src="assets/images/Torus.png" alt="" /> Torus</div>
                <div className="btn-global-5 fs-7" type="submit"><img src="assets/images/Fortmatic.png" alt="" />
                  Fortmatic</div>
                <div className="btn-global-5 fs-7" type="submit">Show more options</div>
              </div>
              <div className="pt-lg-4 pt-5 text-lg-start text-center ">
                <h6 className="text-white">Select item type</h6>
                <p className="a-color4 fs-7">They all serve the same purpose, but each one takes.</p>
              </div>
              <div className="d-flex flex-lg-nowrap flex-wrap gap-3">
                <div className="color-border d-flex gap-2 align-items-center">
                  <div className="emoji-div">
                    <img src="assets/images/emoji-normal.png" alt="" />
                  </div>
                  <p className="text-white mb-0">Create single item</p>
                </div>
                <div className="color-border d-flex gap-2 align-items-center">
                  <div className="emoji-div">
                    <img src="assets/images/smileys.png" alt="" />
                  </div>
                  <p className="text-white mb-0">Create collection</p>
                </div>
              </div>
              <div className="pt-lg-4 pt-5 text-lg-start text-center">
                <h6 className="text-white">Upload an item</h6>
                <p className="a-color4 fs-7">But each one takes a different approach and makes different tradeoffs.
                </p>
              </div>
              <div className="upload-div text-center">
                <div>
                  <span className="cloud-icon " ><FaCloudUploadAlt /></span>
                </div>
                <div>
                  <p className="text-white mb-1 ">Drag your item to upload</p>
                  <p className="a-color4">PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.</p>
                </div>
              </div>
              <div className="pt-4 text-lg-start text-center">
                <h6 className="text-white">Lorem Ipsum</h6>
                <p className="a-color4 fs-7">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry</p>
              </div>
              <div className="pt-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-white fs-7">Raffle End Date</label>
                <input type="text" className="form-control nofocus about-input" id="exampleFormControlInput1" placeholder="Goes Here" />
              </div>
              <div className="pt-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-white fs-7">Ticket Supply</label>
                <input type="text" className="form-control nofocus about-input" id="exampleFormControlInput1" placeholder="Goes Here" />
              </div>
              <div className="pt-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-white fs-7">Set item price or starting
                  bid</label>
                <input type="text" className="form-control nofocus about-input" id="exampleFormControlInput1" placeholder="e.g. 0,01 Eth" />
              </div>
              <div className="pt-5 text-lg-start text-center">
                <h5 className="text-white fw-600 mb-1">Terms and Condition</h5>
                <p className="a-color4 fs-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
              </div>
            </div>
            <div className="col-lg-3 ms-lg-4">
              <div className="mb-4 mt-lg-0 mt-4 text-lg-start text-center">
                <h3 className="text-white">Item Preview</h3>
              </div>
              <div className="card bg-transparent text-white profile-f-bg p-3">
                <div className="card-body p-0">
                  <div className="card-2">
                    <p className="fs-7 mb-0">Dummy Text</p>
                    <p className="mb-1">Lorem Ipsum #14843</p>
                    <p>@_username</p>
                    <div className="d-flex justify-content-between ">
                      <p className="card-title mb-0">Tickets Remaining</p>
                      <small className="fs-8 mb-0">Price/Ticket</small>
                    </div>
                    <div className="d-flex align-items-center a-color justify-content-between">
                      <p className="mt-0">82/100</p>
                      <p className="mt-0">0.2 Sol</p>
                    </div>
                  </div>
                </div>
                <div className>
                  <img src="assets/images/cardimg.png" className="img-fluid card-image" alt="..." />
                </div>
                <div className="pt-3 d-flex justify-content-center">
                  <button className="btn-global-4 px-4" type="submit">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    <Footer />
    </>
  )
}

export default Aboutpage