import React from "react";
import { Link, Route } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
// import MovieReviews from "../components/movieReviews";
import useTvShow from "../hooks/useTvShow";

const TvShowPage = props => {
  const { id } = props.match.params;
  const [tvShow] = useTvShow(id)
  return (
    <>
    {tvShow ? (
      <>
        <PageTemplate tvShow={tvShow}>
          <TvShowDetails tvShow={tvShow} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvShows/${id}/reviews`}
              >
                Show Reviews
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvShows/${id}`}
              >
                Hide Reviews
              </Link>
            )}
          </div>
        </div>
        {/* <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        /> */}
      </>
    ) : (
      <p>Waiting for contact details</p>
    )}
  </>
  );
};

export default TvShowPage;