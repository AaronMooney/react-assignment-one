import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import StubAPI from "../../api/stubAPI";
import "../componentStyles/styles.css";

export default ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then(reviews => {
      setReviews(reviews);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered review">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.author}</td>
                <td>{excerpt(r.content)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movies/reviews/${r.id}`,
                      state: {
                        review: r,
                        movie: movie
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
          {StubAPI.getMovieReviews(movie.id).map((r, index) => {
          return (
            <tr key={index}>
              <td>{r.author}</td>
              <td>{excerpt(r.content)}</td>
              <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movies/reviews/${r.id}`,
                      state: {
                        review: r,
                        movie: movie
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
          );
        })}
      </tbody>
    </table>
  );
};