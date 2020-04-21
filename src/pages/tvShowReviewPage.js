import React from "react";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReview from "../components/tvShowReview";
import "../components/componentStyles/styles.css";

const TvShowReviewPage = (props) => {
  return (
    <div className="review">
      <PageTemplate tvShow={props.location.state.tvShow}>
        <TvShowReview review={props.location.state.review} />
      </PageTemplate>
    </div>
  );
};

export default TvShowReviewPage;
