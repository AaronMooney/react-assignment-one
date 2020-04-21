import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const TvShowsAddToFavoritesButton = ({ tvShow, type }) => {
  const context = useContext(TvShowsContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(tvShow.id, type);
  };
  return (
    <button
      type="button"
      className="btn w-100"
      style={{backgroundColor:"#0174AD",color:"white"}}
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default TvShowsAddToFavoritesButton;