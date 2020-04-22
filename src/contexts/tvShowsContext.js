import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getTvShows, getTrendingTvShows } from "../api/tmdb-api";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [tvShows, setTvShows] = useState([]);
  const [trending, setTrending] = useState([0]);
  const [favorites, setFavorites] = useState([1]);

  const addToFavorites = (tvShowId, type) => {
    if (type === "tv") {
      setTvShows((tvShows) => {
        const index = tvShows.map((m) => m.id).indexOf(tvShowId);
        StubAPI.addTvShowToFavorites(tvShows[index]);
        return [...tvShows];
      });
    } else if (type === "trending") {
      setTrending((tvShows) => {
        const index = tvShows.map((m) => m.id).indexOf(tvShowId);
        StubAPI.addTvShowToFavorites(tvShows[index]);
        return [...tvShows];
      });
    }
  };

  const removeFromFavorites = (tvShowId, type) => {

      if (type === "tv") {
        setFavorites((favorites) => {
          const index = favorites.map((m) => m.id).indexOf(tvShowId);
          StubAPI.removeTvShowFromFavorites(favorites[index]);
          favorites.splice(index, 1);
          return [...favorites];
        });
      }
  };

  const isTvShowInFavorites = (tvShow) => {
    return StubAPI.tvShowExistsInFavorites(tvShow);
  }

  useEffect(() => {
    getTvShows().then((tvShows) => {
      setTvShows(tvShows);
    });

    getTrendingTvShows().then((trending) => {
      setTrending(trending);
    });


    setFavorites(StubAPI.getAllTvShows());


  }, []);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows: tvShows,
        trending: trending,
        favorites: favorites,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        isTvShowInFavorites: isTvShowInFavorites
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;
