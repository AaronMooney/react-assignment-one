import React from "react";
import { Link } from "react-router-dom";
import "../movieCard/movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Person = ({person}) => {

  return (
    <div className="col-sm-3">
      <div className="card">
      <Link to={`/people/${person.id}`}>
        <img
          className="card-img-tag center "
          alt={person.name}
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{person.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "user"]} />
            <span> Known For: {person.known_for_department}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> Popularity: {person.popularity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default (Person);