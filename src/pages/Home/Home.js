import React from 'react';
import Appointment from '../../components/Appointment/Appointment';
import Aspects from '../../components/Aspects/Aspects';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
// import Contact from '../../components/Contact/Contact';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aspects></Aspects>
            <Services></Services>
            {/* <Contact></Contact> */}
            <Appointment></Appointment>
            <Footer></Footer>
        </div>
    );
};

export default Home;