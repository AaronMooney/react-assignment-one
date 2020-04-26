import React, { useContext } from "react";
// import { getFavoriteMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from "../components/buttons/addMovieReview";
import "./homepage.css";
import RemoveFromFavoritesButton from "../components/buttons/removeMovieFromFavoritesButton"
import {MoviesContext} from "../contexts/moviesContext"

const FavoriteMoviesPage = (props) => {
  const context = useContext(MoviesContext);
  return (
    <div className="page">
      <PageTemplate
        movies={context.favorites}
        title={"Favorite Movies"}
        action={(movie) =>
          <>
            <AddReviewButton movie={movie} />
            <RemoveFromFavoritesButton movie={movie}/>
          </>
        }
      />
    </div>
  );
};

export default FavoriteMoviesPage;
