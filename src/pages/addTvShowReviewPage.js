import React from "react";
import PageTemplate from "../components/templateTvShowPage";
import ReviewForm from '../components/reviewForm'

const ReviewFormPage = props => {

  return (
      <PageTemplate tvShow={props.location.state.tvShow}>
          <ReviewForm tvShow={props.location.state.tvShow} />
      </PageTemplate>
  );
};
export default ReviewFormPage;