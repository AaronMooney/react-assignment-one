import React from "react";
import { Link } from "react-router-dom";
import "../movieCard/movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TvShow = ({tvShow, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card">
      <Link to={`/tvShows/${tvShow.id}`}>
        <img
          className="card-img-tag center cardImage"
          alt={tvShow.name}
          src={
            tvShow.poster_path
              ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <p className="card-title">
            {tvShow.name}
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {tvShow.first_air_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {tvShow.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
            {action(tvShow)}
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default (TvShow);