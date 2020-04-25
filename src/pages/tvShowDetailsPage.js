import React from "react";
import { Link, Route } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReviews from "../components/tvShowReviews";
import useTvShow from "../hooks/useTvShow";
import "./homepage.css";

const TvShowPage = (props) => {
  const { id } = props.match.params;
  const [tvShow] = useTvShow(id);
  return (
    <>
      <div className="page">
        {tvShow ? (
          <>
            <PageTemplate tvShow={tvShow}>
              <TvShowDetails tvShow={tvShow} />
            </PageTemplate>
            <div className="row">
              <div className="col-12 ">
                {!props.history.location.pathname.endsWith("/reviews") ? (
                  <Link
                    className="btn btn-block active"
                    style={{backgroundColor:"#0174AD",color:"white"}}
                    to={`/tvShows/${id}/reviews`}
                  >
                    Show Reviews
                  </Link>
                ) : (
                  <Link
                    className="btn btn-block active"
                    style={{backgroundColor:"#0174AD",color:"white"}}
                    to={`/tvShows/${id}`}
                  >
                    Hide Reviews
                  </Link>
                )}
              </div>
            </div>
            <Route
              path={`/tvShows/:id/reviews`}
              render={(props) => <TvShowReviews tvShow={tvShow} {...props} />}
            />
          </>
        ) : (
          <p>Waiting for contact details</p>
        )}
      </div>
    </>
  );
};

export default TvShowPage;
