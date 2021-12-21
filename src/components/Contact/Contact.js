import React from 'react';
import { Container } from 'react-bootstrap';
import { BiRightArrowAlt } from "react-icons/bi";
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <Container>
                <div className="contact-wrapper my-4">
                    <div className="text-center">
                        <p className="green-text">Let Us Help You</p>
                        <h2 className="queries">Have Queries Before The Appointment?</h2>
                    </div>
                    <div className="my-4 d-flex flex-column flex-lg-row align-items-center justify-content-center w-100">

                        <img className="map w-50" src="https://i.ibb.co/GHKVChj/Screenshot-2021-10-19-164758.png" alt="" />

                        <div className="form">
                            <form className="login-form d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
                                <div>
                                    <input className="input"
                                        placeholder="Full Name"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <input className="input"
                                        placeholder="Phone No."
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <input className="input"
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <textarea className="input" name="" id="" cols="30" rows="4"></textarea>
                                </div>
                                <button className="button submit" >Send Message <BiRightArrowAlt /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;