import React from "react";
import { Link } from "react-router-dom";

const MovieReviewButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/movies/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default MovieReviewButton;