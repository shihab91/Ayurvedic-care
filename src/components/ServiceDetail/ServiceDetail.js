import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { BiRightArrowAlt } from "react-icons/bi";
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { name } = useParams();
  console.log(name);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`/services.json`)
      .then(res => res.json())
      .then(data => setService(data.filter(service => service.name === name)))
  }, [])
  return (
    <div>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-start   text-center text-lg-start flex-lg-row service-detail-wrapper ">
          <div className="w-100 w-lg-50 service-information mt-4">
            <h1>{service[0]?.name}</h1>
            <p className=" my-5"> {service[0]?.description}</p>
            <button className="button">Book Appointment<BiRightArrowAlt className="fs-3" /> </button>
          </div>
          <div className="Service-Provider w-100 w-lg-50 ms-lg-5 mt-4 mt-lg-0 d-flex align-items-center align-items-lg-start  flex-column">
            <h2 className="ms-2 ">Service Provider</h2>
            <img src={service[0]?.doctor} className="doctor-image my-3" alt="" />
            <p className="doctor-name ms-5 green-text ">{service[0]?.doctorName}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetail;