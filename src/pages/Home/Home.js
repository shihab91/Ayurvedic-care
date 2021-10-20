import React from 'react';
import Appointment from '../../components/Appointment/Appointment';
import Aspects from '../../components/Aspects/Aspects';
import Banner from '../../components/Banner/Banner';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aspects></Aspects>
            <Services></Services>
            <Appointment></Appointment>
            <MessengerCustomerChat
                pageId="105349941707501"
                appId="4479808522076849"
            />
        </div>
    );
};

export default Home;