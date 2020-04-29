import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { username, authenticated, authToken } = useContext(AuthContext);

  return (

    <Route {...rest} render={props => (
      (username && authToken && authenticated) ? <Component {...props}/>
      : <Redirect to="/login"/>
    )} />
  )};

export default PrivateRoute;