import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getTvShows } from "../api/tmdb-api";

export const TvShowsContext = React.createContext(null)

const TvShowsContextProvider = props => {
  const [tvShows, setTvShows] = useState([]);

  const addToFavorites = tvShowId => {
    setTvShows(tvShows => {
      const index = tvShows.map(m => m.id).indexOf(tvShowId);
      StubAPI.add(tvShows[index]);
      tvShows.splice(index, 1);
      return [...tvShows];
    });
  };
  useEffect(() => {
    getTvShows().then(tvShows => {
      setTvShows(tvShows);
    });
  }, []);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows: tvShows,
        addToFavorites: addToFavorites
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider