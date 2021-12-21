import React from 'react';
import { Container } from 'react-bootstrap';
import { BiRightArrowAlt } from "react-icons/bi";
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <div className="banner-wrapper d-flex flex-lg-row align-items-sm-start justify-content-space-between flex-column align-items-center ">
                    <div className="banner-text w-100 w-md-50 text-center text-lg-start mt-lg-5" data-aos="fade-right">
                        <p className="green-text">Medical center</p>
                        <h1>Best Medical And  Health Care Center</h1>
                        <p className="info pt-3">Personalized patient care is what sets MMCL apart. <br /> When you visit us you can expect to receive world class care.</p>
                        <button className="button mt-2  ">Learn More <BiRightArrowAlt /> </button>
                    </div>
                    <div className="banner-img w-md-100 d-inline" data-aos="fade-left">
                        <img className="w-100 w-sm-50 mt-4 mt-lg-0" src="https://htmldesigntemplates.com/ayurvedic/wp-content/uploads/sites/8/2021/09/Epidemic-line-01-01.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;