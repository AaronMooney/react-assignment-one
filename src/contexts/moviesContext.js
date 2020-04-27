import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getMovies, getTrendingMovies, getUpcomingMovies, addFavoriteMovie, getFavoriteMovies, removeFavoriteMovie } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([0]);
  const [upcoming, setUpcoming] = useState([1]);
  const [favorites, setFavorites] = useState([2]);
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (movieId, type) => {
    if (type === "movies") {
      setMovies((movies) => {
        const index = movies.map((m) => m.id).indexOf(movieId);
        addFavoriteMovie(movies[index], localStorage.getItem('username'));
        favorites.push(movies[index])
        return [...movies];
      });
    } else if (type === "trending") {
      setTrending((movies) => {
        const index = movies.map((m) => m.id).indexOf(movieId);
        addFavoriteMovie(movies[index], localStorage.getItem('username'));
        favorites.push(movies[index])
        return [...movies];
      });
    }
  };

  const removeFromFavorites = (movieId) => {
    console.log(movieId)
    setFavorites((favorites) => {
      const index = favorites.map((m) => m.id).indexOf(movieId);
      removeFavoriteMovie(localStorage.getItem('username'),movieId);
      favorites.splice(index, 1);
      return [...favorites];
    });
    
  };

  const isMovieInFavorites = (movie) => {
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
    getMovies().then((movies) => {
      setMovies(movies);
    });

    getTrendingMovies().then((trending) => {
      setTrending(trending);
    });

    getUpcomingMovies().then((upcoming) => {
      setUpcoming(upcoming);
    })

    getFavoriteMovies(localStorage.getItem('username')).then(movies => {
      setFavorites(movies);
    });
  }
  }, [authenticated]);

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
        setAuthenticated: setAuthenticated,
        // getFavorites: getFavorites
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
