import React from "react";
import PersonHeader from '../headerPerson'
import "../templateMoviePage/moviePage.css"

const TemplatePersonPage = ({ person, credits, children }) => {
  return (
    <>
      <PersonHeader person={person} credits={credits} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={person.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePersonPage;