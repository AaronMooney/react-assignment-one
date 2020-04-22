import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const TvShowsRemoveFromFavoritesButton = ({ tvShow, type }) => {
  const context = useContext(TvShowsContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.removeFromFavorites(tvShow.id, type);
  };
  return (
    <button
      type="button"
      className="btn w-100"
      style={{backgroundColor:"#0174AD",color:"white"}}
      onClick={handleAddToFavorite}
    >
      Remove From Favorites
    </button>
  );
};

export default TvShowsRemoveFromFavoritesButton;