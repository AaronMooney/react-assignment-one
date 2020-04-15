import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateTvShowListPage";
import AddReviewButton from '../components/buttons/addTvShowReview'

const FavoriteMoviesPage = props => {

  return (
    <PageTemplate
      tvShows={StubAPI.getAllTvShows()}
      title={"Favorite Tv Shows"}
      action={tvShow => <AddReviewButton tvShow={tvShow} />}
    />
  );
};

export default FavoriteMoviesPage;