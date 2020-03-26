import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import {TvShowsContext} from '../contexts/tvShowsContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TvShowListPage = () => {
  const context = useContext(TvShowsContext);

  return (
      <PageTemplate 
        title='All Tv Shows'
        tvShows={context.tvShows}
        action={ tvShow => console.log("placeholder") }
      />
  );
};

export default TvShowListPage;