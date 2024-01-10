import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";




const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={160} />
          <span className="secondaryText">
            Our vision is to make our customers happy <br />
            with the comfort they deserve.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Our Office</span>
          <span className="secondaryText">121/6, Gulmohar Plaza, ABB Circle <br/> Nashik, Maharashtra, India</span>
          <div className="flexCenter f-menu">
            <Link to="/properties" >Properties</Link>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScVDMYyhA7SCnhjv6gE_oTdGGJxp930UYsYqIvSaPwsRbiH4Q/viewform?usp=sf_link">Contact</Link >
            <Link to="https://glittery-kitten-bb231e.netlify.app/">Team Members</Link >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
