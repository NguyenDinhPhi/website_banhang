import React from "react";
import '../styles/home.css'
import banner from "../assets/img/bgr.jpg";
const Home = () => {
  return (
    <div>
      <section>
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
