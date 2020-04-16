import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getMovies, getTrendingMovies } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([0]);

  const addToFavorites = (movieId, type) => {
    if (type === "movies") {
      setMovies((movies) => {
        const index = movies.map((m) => m.id).indexOf(movieId);
        StubAPI.addMovieToFavorites(movies[index]);
        movies.splice(index, 1);
        return [...movies];
      });
    } else if (type === "trending") {
      setTrending((movies) => {
        const index = movies.map((m) => m.id).indexOf(movieId);
        StubAPI.addMovieToFavorites(movies[index]);
        movies.splice(index, 1);
        return [...movies];
      });
    }
  };
  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });

    getTrendingMovies().then((trending) => {
      setTrending(trending);
    });
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        trending: trending,
        addToFavorites: addToFavorites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
