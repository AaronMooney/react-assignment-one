import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getTvShows, getTrendingTvShows } from "../api/tmdb-api";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [tvShows, setTvShows] = useState([]);
  const [trending, setTrending] = useState([0]);

  const addToFavorites = (tvShowId, type) => {
    if (type === "tv") {
      setTvShows((tvShows) => {
        const index = tvShows.map((m) => m.id).indexOf(tvShowId);
        StubAPI.addTvShowToFavorites(tvShows[index]);
        tvShows.splice(index, 1);
        return [...tvShows];
      });
    } else if (type === "trending") {
      setTrending((tvShows) => {
        const index = tvShows.map((m) => m.id).indexOf(tvShowId);
        StubAPI.addTvShowToFavorites(tvShows[index]);
        tvShows.splice(index, 1);
        return [...tvShows];
      });
    }
  };
  useEffect(() => {
    getTvShows().then((tvShows) => {
      setTvShows(tvShows);
    });

    getTrendingTvShows().then((trending) => {
      setTrending(trending);
    });
  }, []);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows: tvShows,
        trending: trending,
        addToFavorites: addToFavorites,
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;
