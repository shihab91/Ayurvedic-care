import React from 'react';
import { Container } from 'react-bootstrap';
import { MdDoubleArrow } from 'react-icons/md';
import { AiOutlineHome } from "react-icons/ai";

import './About.css'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="about-page my-5">
      <Container>
        <div className="d-flex flex-column flex-md-row ">
          <div data-aos="fade-right" className="w-lg-50 about-image">
            <img className="w-lg-50 w-100 " src="https://htmldesigntemplates.com/ayurvedic/wp-content/uploads/sites/8/2021/09/pediatrician-examining-boy-s-spine-2021-04-02-20-48-30-utc.jpg" alt="" />
          </div>
          <div>
            <div className="about-text mt-lg-4  text-center ms-lg-5 text-lg-start w-lg-50" data-aos="fade-left">
              <p className="green-text mt-5 ">Welcome To Best Medical & Health</p>
              <h2>We have launched most powerful treatment system.</h2>
              <p className="hospital-info py-4">The Ayurvedic is one of the  the largest medical providers in the world, with over 7.6 million patient visits in 2017 at hospitals in the U.S.</p>
            </div>
            <div className="facilities ms-lg-5 d-flex flex-column flex-lg-row text-start">
              <div>
                <p className="mb-4"><MdDoubleArrow />Professional Doctors</p>
                <p className="mb-4"><MdDoubleArrow />Digital Laboratory</p>
                <p><MdDoubleArrow />Online Schedule</p>
              </div>
              <div className="ms-0 ms-lg-4">
                <p className="mb-4"><MdDoubleArrow />24/7 Online Support </p>
                <p className="mb-4"><MdDoubleArrow />High Packages</p>
                <p><MdDoubleArrow />And More...</p>
              </div>

            </div>
            <Link to="/home" >
              <button className="button ms-lg-5 mt-2">Go back home <AiOutlineHome /></button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;