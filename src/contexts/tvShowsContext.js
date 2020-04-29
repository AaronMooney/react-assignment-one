import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getTvShows, getTrendingTvShows, addFavoriteTvShow, getFavoriteTvShows, removeFavoriteTvShow } from "../api/tmdb-api";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [tvShows, setTvShows] = useState([]);
  const [trending, setTrending] = useState([0]);
  const [favorites, setFavorites] = useState([1]);
  const [authenticated, setAuthenticated] = useState(false);


  const addToFavorites = (tvShowId, type) => {
    if (type === "tv") {
      setTvShows((tvShows) => {
        const index = tvShows.map((m) => m.id).indexOf(tvShowId);
        addFavoriteTvShow(tvShows[index], localStorage.getItem('username'));
        favorites.push(tvShows[index])
        return [...tvShows];
      });
    } else if (type === "trending") {
      setTrending((tvShows) => {
        const index = tvShows.map((m) => m.id).indexOf(tvShowId);
        addFavoriteTvShow(tvShows[index], localStorage.getItem('username'));
        favorites.push(tvShows[index])
        return [...tvShows];
      });
    }
  };

  const removeFromFavorites = (tvShowId) => {
        setFavorites((favorites) => {
          const index = favorites.map((m) => m.id).indexOf(tvShowId);
          removeFavoriteTvShow(localStorage.getItem('username'),tvShowId);
        favorites.splice(index, 1);
          return [...favorites];
        });
      
  };

  const isTvShowInFavorites = (movie) => {
    return movieExistsInFavorites(movie);
  }

  function movieExistsInFavorites(movie) {
    if (!favorites.filter(e => e.id === movie.id).length > 0){
        return true
    } else {
        return false
    }
};

  useEffect(() => {
    if (authenticated){
    getTvShows().then((tvShows) => {
      setTvShows(tvShows);
    });

    getTrendingTvShows().then((trending) => {
      setTrending(trending);
    });


    getFavoriteTvShows(localStorage.getItem('username')).then(tvShows => {
      setFavorites(tvShows);
    });

  }
  }, [authenticated]);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows: tvShows,
        trending: trending,
        favorites: favorites,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        isTvShowInFavorites: isTvShowInFavorites,
        setAuthenticated: setAuthenticated,

      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;
