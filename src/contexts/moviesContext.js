import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getMovies, getTrendingMovies, getUpcomingMovies } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([0]);
  const [upcoming, setUpcoming] = useState([1]);
  const [favorites, setFavorites] = useState([1]);

  const addToFavorites = (movieId, type) => {
    if (type === "movies") {
      setMovies((movies) => {
        const index = movies.map((m) => m.id).indexOf(movieId);
        StubAPI.addMovieToFavorites(movies[index]);
        return [...movies];
      });
    } else if (type === "trending") {
      setTrending((movies) => {
        const index = movies.map((m) => m.id).indexOf(movieId);
        StubAPI.addMovieToFavorites(movies[index]);
        return [...movies];
      });
    }
  };

  const removeFromFavorites = (movieId) => {


    setFavorites((favorites) => {
      const index = favorites.map((m) => m.id).indexOf(movieId);
      StubAPI.removeTvShowFromFavorites(favorites[index]);
      favorites.splice(index, 1);
      return [...favorites];
    });
    
  };

  const isMovieInFavorites = (movie) => {
    return StubAPI.movieExistsInFavorites(movie);
  }


  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });

    getTrendingMovies().then((trending) => {
      setTrending(trending);
    });

    getUpcomingMovies().then((upcoming) => {
      setUpcoming(upcoming);
    })

    setFavorites(StubAPI.getAllMovies());
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        trending: trending,
        upcoming: upcoming,
        addToFavorites: addToFavorites,
        favorites: favorites,
        removeFromFavorites: removeFromFavorites,
        isMovieInFavorites: isMovieInFavorites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
