import React from "react";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";

const Home = () => {
  return (
    <div className="text-light">
      <Header />
      <section>
        <div className="container position-r">
          <img src="/assets/images/01.png" className="right" alt="" />
          <img src="/assets/images/02.png" className="left" alt="" />
          <div className="d-flex justify-content-center pt-5 mt-5 mb-5 pb-5">
            <img src="assets/images/mainlogo.png" className="tigerimg" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
