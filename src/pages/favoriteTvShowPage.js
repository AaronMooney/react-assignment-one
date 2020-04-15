import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateTvShowListPage";
import AddReviewButton from '../components/buttons/addReview'

const FavoriteMoviesPage = props => {

  return (
    <PageTemplate
      tvShows={StubAPI.getAllTvShows()}
      title={"Favorite Tv Shows"}
      // action={tvShow => <AddReviewButton movie={tvShow} />}
      action={tvShow => console.log("test")}
    />
  );
};

export default FavoriteMoviesPage;