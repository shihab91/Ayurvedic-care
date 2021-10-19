import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
  return (
    <div>
      <Container>
        <div className="notFound d-flex flex-column  align-items-center">
          <img src="https://i.ibb.co/TTzmVSH/404.gif" alt="" />
          <Link to="/home">
            <button className="button mt-4">Go back</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;