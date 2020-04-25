import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const TvShowsRemoveFromFavoritesButton = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleRemoveFromFavorite = e => {
    e.preventDefault();
    context.removeFromFavorites(tvShow.id);
  };
  return (
    <button
      type="button"
      className="btn w-100"
      style={{backgroundColor:"#0174AD",color:"white"}}
      onClick={handleRemoveFromFavorite}
    >
      Remove From Favorites
    </button>
  );
};

export default TvShowsRemoveFromFavoritesButton;