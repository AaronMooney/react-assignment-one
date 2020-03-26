import React from "react";
import "../movieDetails/movieDetails.css";

export default ({ tvShow }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{tvShow.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" className="list-group-item ">
          {tvShow.episode_run_time}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Last Air Date
        </li>
        <li key="rdv" className="list-group-item ">
          {tvShow.last_air_date}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {tvShow.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {tvShow.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Netorks
        </li>
        {tvShow.networks.map(n => (
          <li key={n.name} className="list-group-item">
            {n.name}
          </li>
        ))}
      </ul>
    </>
  );
};