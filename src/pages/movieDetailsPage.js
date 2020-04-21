import React from "react";
import { Link, Route } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import "./homepage.css";

const MoviePage = (props) => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  return (
    <>
      {movie ? (
        <>
          <div className="page">
            <PageTemplate movie={movie}>
              <MovieDetails movie={movie} />
            </PageTemplate>
            <div className="row">
              <div className="col-12 ">
                {!props.history.location.pathname.endsWith("/reviews") ? (
                  <Link
                    className="btn btn-block active"
                    style={{backgroundColor:"#0174AD",color:"white"}}
                    to={`/movies/${id}/reviews`}
                  >
                    Show Reviews
                  </Link>
                ) : (
                  <Link
                    className="btn btn-block active"
                    style={{backgroundColor:"#0174AD",color:"white"}}
                    to={`/movies/${id}`}
                  >
                    Hide Reviews
                  </Link>
                )}
              </div>
            </div>
            <Route
              path={`/movies/:id/reviews`}
              render={(props) => <MovieReviews movie={movie} {...props} />}
            />
          </div>
        </>
      ) : (
        <p>Waiting for contact details</p>
      )}
    </>
  );
};

export default MoviePage;
