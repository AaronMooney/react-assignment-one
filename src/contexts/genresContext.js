import React, { useState, useEffect, createContext } from "react";
import { getGenres } from "../api/tmdb-api";

export const GenresContext = createContext(null)

const GenresContextProvider = props => {
    const [genres, setGenres] = useState([{ id: "0", name: "All" }]);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      if (authenticated){
      getGenres().then(allGenres => {
        setGenres([genres[0], ...allGenres]);
      });
    }
    }, [authenticated]);

    return (
        <GenresContext.Provider
          value={{
            genres,
            setAuthenticated: setAuthenticated
          }}
        >
          {props.children}
        </GenresContext.Provider>    
    )
}

export default GenresContextProvider;