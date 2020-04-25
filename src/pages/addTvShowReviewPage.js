import React from "react";
import PageTemplate from "../components/templateTvShowPage";
import ReviewForm from "../components/reviewForm";
import "./homepage.css";

const ReviewFormPage = (props) => {
  return (
    <div className="page">
      <PageTemplate tvShow={props.location.state.tvShow}>
        <ReviewForm tvShow={props.location.state.tvShow} />
      </PageTemplate>
    </div>
  );
};
export default ReviewFormPage;
