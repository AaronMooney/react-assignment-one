import React, { useContext, useState } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const TvShowsAddToFavoritesButton = ({ tvShow, type }) => {

  const context = useContext(TvShowsContext);
  const [disabled, setDisabled] = useState(!context.isTvShowInFavorites(tvShow))

  const handleAddToFavorite = e => {
    setDisabled(!disabled)
    e.preventDefault();
    context.addToFavorites(tvShow.id, type);

  };


  return (
    <button
      type="button"
      className="btn w-100"
      style={{backgroundColor:"#0174AD",color:"white"}}
      onClick={handleAddToFavorite}
      disabled={disabled}
      >
        {disabled ? "Favorited" : "Add to Favorites"}
    </button>
  );
};

export default TvShowsAddToFavoritesButton;