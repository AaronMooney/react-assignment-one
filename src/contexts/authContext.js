import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const existingToken = localStorage.getItem("token");
  const existingUser = localStorage.getItem("username");
  const [authToken, setAuthToken] = useState(existingToken);
  const [username, setUsername] = useState(existingUser);
  const [authenticated, setAuthenticated] = useState(false);

  

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const setName = (data) => {
    localStorage.setItem("username", data);
    setUsername(data);
  }

  const logout = () => {
    setToken(undefined)
    setUsername(undefined)
    setAuthenticated(false)
  }

  return (
      <AuthContext.Provider
        value={{
          authToken,
          setAuthToken: setToken,
          username,
          setUsername: setName,
          setAuthenticated: setAuthenticated,
          authenticated: authenticated,
          logout: logout,
        }}
      >
        {props.children}
      </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContextProvider;