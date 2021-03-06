import React, { useState, useContext} from "react";
import { Link, Redirect } from "react-router-dom";
import * as api from '../api/tmdb-api';
import { Card,  Form, Input, Button, Error } from "../components/loginComponents";
import { useAuth } from "../contexts/authContext";
import {MoviesContext} from '../contexts/moviesContext'
import {TvShowsContext} from '../contexts/tvShowsContext'
import {GenresContext} from '../contexts/genresContext'
import {PeopleContext} from '../contexts/peopleContext'


function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken, setUsername, setAuthenticated, setShowLogout } = useAuth();
  // const { setUsername } = useAuth();
  // const { setAuth } = useAuth();
  const moviesContext = useContext(MoviesContext);
  const tvShowsContext = useContext(TvShowsContext);
  const genresContext = useContext(GenresContext);
  const peopleContext = useContext(PeopleContext);


  function userLogin() {
    api.login( userName, password)
    .then(result => {
      if (result.success) {
        
        setAuthToken(result.token);
        setUsername(userName);
        setAuthenticated(true);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      console.log(e)
      setIsError(true);
    });
  }
  

  if (isLoggedIn) {
    moviesContext.setAuthenticated(true);
    tvShowsContext.setAuthenticated(true);
    genresContext.setAuthenticated(true);
    peopleContext.setAuthenticated(true);
    return <Redirect to="/" />;
  }

  return (
    <Card>

      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={userLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;