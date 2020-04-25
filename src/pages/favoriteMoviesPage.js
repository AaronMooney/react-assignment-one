import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from "../components/buttons/addMovieReview";
import "./homepage.css";
import RemoveFromFavoritesButton from "../components/buttons/removeMovieFromFavoritesButton"

const FavoriteMoviesPage = (props) => {
  return (
    <div className="page">
      <PageTemplate
        movies={StubAPI.getAllMovies()}
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
