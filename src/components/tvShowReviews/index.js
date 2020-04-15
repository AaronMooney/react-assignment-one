import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTvShowReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import StubAPI from "../../api/stubAPI"

export default ({ tvShow }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTvShowReviews(tvShow.id).then(reviews => {
      setReviews(reviews);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
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
                      pathname: `/tvShows/reviews/${r.id}`,
                      state: {
                        review: r,
                        tvShow: tvShow
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
          {StubAPI.getTvShowReviews(tvShow.id).map((r, index) => {
          return (
            <tr key={index}>
              <td>{r.author}</td>
              <td>{excerpt(r.content)}</td>
              <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/tvShows/reviews/${r.id}`,
                      state: {
                        review: r,
                        tvShow: tvShow
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