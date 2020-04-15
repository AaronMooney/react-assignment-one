import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getPopularPeople } from "../api/tmdb-api";

export const PeopleContext = React.createContext(null)

const PeopleContextProvider = props => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPopularPeople().then(people => {
      setPeople(people);
    });
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        people: people,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider