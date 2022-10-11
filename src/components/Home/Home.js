import React from "react";
import headerImg from "../../images/programmingEvulation.jpg";
import './Home.css'

const Home = () => {
  return (
    <div className="header px-20">
      <div className="headerThumnail">
        <img className="headerImg" src={headerImg} alt="" />
      </div>
        <h1 className="headertitle text-3xl uppercase mt-3">First rule of programming - If it works then don't touch it</h1>
    </div>
  );
};

export default Home;
