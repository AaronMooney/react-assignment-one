import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import {TvShowsContext} from '../contexts/tvShowsContext'
import TvShowAddToFavoritesButton from '../components/buttons/tvShowAddToFavorites'

const TvShowListPage = () => {
  const context = useContext(TvShowsContext);

  return (
      <PageTemplate 
        title='All Tv Shows'
        tvShows={context.tvShows}
        action={tvShow => <TvShowAddToFavoritesButton tvShow={tvShow} /> }
      />
  );
};

export default TvShowListPage;