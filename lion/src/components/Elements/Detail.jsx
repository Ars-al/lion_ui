import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {
    FaRegHeart
  } from "react-icons/fa ";
import {
    BiDotsHorizontalRounded 
  } from "react-icons/bi";
import ConCard from './ConCard';

const Detail = () => {
  return (
    <>
    <Header />

    <section className="pt-5 mt-4 ms-lg-5">
        <div className="container">
          <div className="row">
            <h3 className="text-white">Item Details</h3>
            <div className="col-lg-6 col-12 pt-3">
              <div>
                <img src="assets/images/detailimg.png" className="img-fluid detail-img" alt="" />
              </div>
              <div className="d-flex justify-content-between pt-3">
                <div>
                  <button className="btn-global-4 px-4 fw-500" type="submit">01</button>
                </div>
                <div>
                  <button className="btn-global-4 px-4 fw-500" type="submit">Buy Raffle Ticket</button>
                  <div className="text-center pt-3">
                    <p className="mb-1 text-white fs-7">0.1 SOL / Ticket</p>
                    <p className="fs-7 a-color">You have 0.00 SOL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 pt-3">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="text-white ">
                    <img src="assets/images/img - 1.png" alt="" />
                    <small className="ms-lg-2"> Trending Arts</small>
                  </div>
                </div>
                <div className="text-white d-flex gap-1 fs-7 align-items-center">
                  <div className="border-div">
                    <span className="me-lg-2 me-1">< FaRegHeart /></span>68 
                  </div>
                  <div className="border-div-1">
                    <span> <BiDotsHorizontalRounded className='fs-5'/></span>
                  </div>
                </div>
              </div>
              <div className="text-white pt-3">
                <h2 className="text-lg-start text-center pt-lg-0 pt-3">Wicked Cranium #4449</h2>
                <p className="fs-8 a-color4 text-lg-start text-center">A collection of 10,000 undead NFTs minted on the Ethereum blockchain. Each
                  unique Deadfella is randomly generated from a combination.</p>
              </div>
              <div className="fs-7 d-lg-flex gap-2  text-lg-start text-center">
                <button className="btn-global fw-500">DETAILS</button>
                <button className="btn-global fw-500">PARTICIPANTS</button>
                <button className="btn-global mt-lg-0 mt-2 fw-500">TRANSACTIONS</button>
              </div>
              <div className="pt-5 d-flex gap-5">
                <div className="text-white">
                  <p className="fs-7 mb-2 fw-500">Ticket Sales Ends In:</p>
                  <h3 className="mb-4">14 mins 43s</h3>
                  <p className="fs-7 mb-2 fw-500">Raffle Start Date:</p>
                  <h3 className="mb-4">41/69</h3>
                  <p className="fs-7 mb-2 fw-500">Raffler:</p>
                  <h3>HQ76...1ibz</h3>
                </div>
                <div className="text-white ms-lg-5 ms-2">
                  <p className="fs-7 mb-2 fw-500">Ticket Cost:</p>
                  <h3 className="mb-4">0.1 SOL</h3>
                  <p className="fs-7 mb-2 fw-500">Tickets Remaining:</p>
                  <h3 className="mb-4">0.1 SOL</h3>
                </div>
              </div>
              <div className="a-color4 pt-3 text-lg-start text-center">
                <h6 className=" text-white pt-lg-0 pt-2">Terms and Condition</h6>
                <p className="mb-0 fs-8">1.Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. </p>
                <p className="mb-0 fs-8">2.Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s.</p>
                <p className="mb-0 fs-8">3.when an unknown printer took a galley of type </p>
                <p className="fs-8">4.scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className="text-white mt-5 text-lg-start text-center">
            <h3>Lorem Ipsum Dummy</h3>
          </div>
          <div className="row  pt-lg-5 pt-4 pb-lg-5 pb-4">
            <ConCard />
            <ConCard />
            <ConCard />
            <ConCard />
          </div>
        </div>
      </section>

    <Footer />
    </>
  )
}

export default Detail