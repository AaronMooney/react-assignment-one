import React from "react";
import { Link } from "react-router-dom";

const TvShowReviewButton = ({ tvShow }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/tvShows/reviews/form`,
        state: {
          tvShow: tvShow
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default TvShowReviewButton;