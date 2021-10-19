import React from 'react';
import { Container } from 'react-bootstrap';
import { BiRightArrowAlt } from "react-icons/bi";
import './Appointment.css'
const Appointment = () => {
    return (
        <div className="mb-5 " id="appointment">
            <Container>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <div className="appointment-text aspects-text w-lg-50 d-flex justify-content-center align-items-center flex-column text-center">
                        <p className="green-text">Need A Doctor For Check-Up?</p>
                        <h2 className=" mb-3 ">Just Make An Appointment</h2>
                        <p >Get The Right Care Book With Your Doctors!</p>
                        <small className="w-75 mb-4 ">An appointment letter or employment letter is a formal letter provided in writing to a </small>
                        <button className="button">Get Appointment<BiRightArrowAlt /></button>
                    </div>
                    <div className="w-lg-50 d-flex justify-content-center mt-5 mt-lg-0">
                        <img className=" appointment-img" src="https://htmldesigntemplates.com/ayurvedic/wp-content/uploads/sites/8/2021/09/pediatrician-examining-boy-s-spine-2021-04-02-20-48-30-utc.jpg" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Appointment;