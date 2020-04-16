import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateTvShowListPage";
import AddReviewButton from "../components/buttons/addTvShowReview";
import "./homepage.css";

const FavoriteMoviesPage = (props) => {
  return (
    <div className="page">
      <PageTemplate
        tvShows={StubAPI.getAllTvShows()}
        title={"Favorite Tv Shows"}
        action={(tvShow) => <AddReviewButton tvShow={tvShow} />}
      />
    </div>
  );
};

export default FavoriteMoviesPage;
