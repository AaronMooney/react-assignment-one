import React from "react";
import "../movieDetails/movieDetails.css";
import "../componentStyles/styles.css"

export default ({ tvShow }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{tvShow.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" className="list-group-item detailsText">
          {tvShow.episode_run_time}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Last Air Date
        </li>
        <li key="rdv" className="list-group-item detailsText">
          {tvShow.last_air_date}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="noel" className="list-group-item list-group-item-dark">
          Number of Episodes
        </li>
        <li key="noe" className="list-group-item detailsText">
          {tvShow.number_of_episodes}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="nosl" className="list-group-item list-group-item-dark">
          Number of Seasons
        </li>
        <li key="nos" className="list-group-item detailsText">
          {tvShow.number_of_seasons}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {tvShow.genres.map(g => (
          <li key={g.name} className="list-group-item detailsText">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {tvShow.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item detailsText">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="nw" className="list-group-item list-group-item-dark">
          Networks
        </li>
        {tvShow.networks.map(n => (
          <li key={n.name} className="list-group-item detailsText">
            {n.name}
          </li>
        ))}
      </ul>
    </>
  );
};