import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getPopularPeople } from "../api/tmdb-api";

export const PeopleContext = React.createContext(null)

const PeopleContextProvider = props => {
  const [people, setPeople] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {
    if (authenticated){
    getPopularPeople().then(people => {
      setPeople(people);
    });
  }
  }, [authenticated]);

  return (
    <PeopleContext.Provider
      value={{
        people: people,
        setAuthenticated: setAuthenticated
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider