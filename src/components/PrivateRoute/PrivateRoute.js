import React from 'react';
import { Container } from 'react-bootstrap';
import { Spinner } from 'react-rainbow-components';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PirvateRoute.css'
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="spinner-div">
        <Spinner size="large" className="spinner" />
      </div>
    )

  }
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;