import React, { useContext, useState } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import "../componentStyles/styles.css"

const MovieAddToFavoritesButton = ({ movie , type}) => {
  const context = useContext(MoviesContext);
  const [disabled, setDisabled] = useState(!context.isMovieInFavorites(movie))


  const handleAddToFavorite = e => {
    setDisabled(!disabled)
    e.preventDefault();
    context.addToFavorites(movie.id, type);
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

export default MovieAddToFavoritesButton;