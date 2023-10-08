import React from "react";
import "./HomePage.scss";
import Navbar from "../Navbar/Navbar";
import ava from "../../assets/images/thien.jpg";


function HeroSection() {
  return (
    <>
      <div className="hero flex flex-col items-center text-black text-center bg-cover relative backdrop-blur-md">
        <Navbar />
        <div className="wrap-intro mt-40">
          <img
            className="avatar w-44 h-44 rounded-full mx-auto mb-12 object-cover"
            src={ava}
          ></img>
          <h1 className="heading text-5xl mb-5 font-semibold uppercase">
            Welcome to my Portfolio
          </h1>
          <p className="sub-heading text-2xl font-semibold mb-10">
            I'm Thien, Software Engineer
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
