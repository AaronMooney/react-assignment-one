import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import "./homepage.css";

const ReviewFormPage = (props) => {
  return (
    <div className="page">
      <PageTemplate movie={props.location.state.movie}>
        <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
    </div>
  );
};
export default ReviewFormPage;
