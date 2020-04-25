import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";


const MovieRemoveFromFavoritesButton = ({ movie, action }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavorite = e => {
    e.preventDefault();
    context.removeFromFavorites(movie.id);
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

export default MovieRemoveFromFavoritesButton;