import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateTvShowListPage";
import AddReviewButton from "../components/buttons/addTvShowReview";
import RemoveFromFavoritesButton from "../components/buttons/removeTvFromFavoritesButton";
import "./homepage.css";

const FavoriteTvShowsPage = (props) => {
  return (
    <div className="page">
      <PageTemplate
        tvShows={StubAPI.getAllTvShows()}
        title={"Favorite Tv Shows"}
        action={(tvShow) =>
          <>
          {console.log(tvShow)}
          <AddReviewButton tvShow={tvShow} />
          <RemoveFromFavoritesButton tvShow={tvShow} type="tv"/>
          </>
        }
      />
    </div>
  );
};

export default FavoriteTvShowsPage;
