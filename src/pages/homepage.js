import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import MovieAddToFavoritesButton from '../components/buttons/movieAddToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);

  return (
      <PageTemplate 
        title='All Movies'
        movies={context.movies}
        action={movie => <MovieAddToFavoritesButton movie={movie} /> }
      />
  );
};

export default MovieListPage;