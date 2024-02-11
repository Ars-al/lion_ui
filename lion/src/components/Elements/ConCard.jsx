import React from 'react'

const ConCard = () => {
  return (
    <>
    <div className='col-lg-3 col-12 mt-3'>
    <div className=" card bg-transparent text-white profile-f-bg p-3">
              <div className="card-body p-0">
                <div className="card-2">
                  <p className="fs-7 mb-0">Dummy Text</p>
                  <p className="mb-1 fw-600">Lorem Ipsum #14843</p>
                  <p className="fs-7 fw-500">@_usernamehere</p>
                  <div className="d-flex justify-content-between ">
                    <p className="card-title mb-0 fs-7">Tickets Remaining</p>
                    <small className="fs-8 mb-0">Price/Ticket</small>
                  </div>
                  <div className="d-flex align-items-center a-color justify-content-between">
                    <p className="mt-0 fw-500">82/100</p>
                    <p className="mt-0 fw-500">0.2 Sol</p>
                  </div>
                </div>
              </div>
              <div className>
                <img
                  src="assets/images/cardimg.png"
                  className="img-fluid card-image"
                  alt="..."
                />
              </div>
              <div className="pt-3 d-flex justify-content-center">
                <button className="btn-global-4 px-4" type="submit">
                  Purchase
                </button>
              </div>
            </div>
    </div>
    
    </>
  )
}

export default ConCard