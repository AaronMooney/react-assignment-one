import React from "react";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import "../components/componentStyles/styles.css";

const MovieReviewPage = (props) => {
  return (
    <div className="review">
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} />
      </PageTemplate>
    </div>
  );
};

export default MovieReviewPage;
