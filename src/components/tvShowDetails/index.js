import React from "react";
import "../movieDetails/movieDetails.css";
import "../componentStyles/styles.css"

export default ({ tvShow }) => {
  return (
  <>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3>
            Overview
          </h3>
          <p class="bio">
            {tvShow.overview}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="detailsItem">
            <h5 class="detailsLabel">
              Runtime (min.)
            </h5>
            <span class="detail">
              {tvShow.episode_run_time}
            </span>
          </div>
          <div class="detailsItem">
          <h5 class="detailsLabel">
            Last Air Date
          </h5>
          <span class="detail">
            {tvShow.last_air_date}
        </span>
      </div>
      <div class="detailsItem">
          <h5 class="detailsLabel">
          Number of Episodes
          </h5>
          <span class="detail">
            {tvShow.number_of_episodes}
        </span>
      </div>
      <div class="detailsItem">
          <h5 class="detailsLabel">
          Number of Seasons
          </h5>
          <span class="detail">
            {tvShow.number_of_seasons}
        </span>
      </div>
    </div>
  </div>
  <div class="row">
		<div class="col-md-3">
			<div class="card scroll">
				<h5 class="card-header">
					Genres
				</h5>
				<div class="card-body">
					<p class="card-text">
          {tvShow.genres?.map(function(d,index){
            return (<p key={index} class="detailsText" >{d.name}</p>)
          })}
					</p>
				</div>
			</div>
		</div>
    <div class="col-md-4">
			<div class="card scroll">
				<h5 class="card-header">
          Production Companies
				</h5>
				<div class="card-body">
					<p class="card-text">
          {tvShow.production_companies?.map(function(c){
            return (<p key={c.name} className="detailsText" >{c.name}</p>)
          })}
					</p>
				</div>
      </div>
    </div>
    <div class="col-md-4">
			<div class="card scroll">
				<h5 class="card-header">
          Networks
				</h5>
				<div class="card-body">
					<p class="card-text">
          {tvShow.networks?.map(function(c){
            return (<p key={c.name} className="detailsText" >{c.name}</p>)
          })}
					</p>
				</div>
      </div>
    </div>
  </div>
</div>
</>
  );
};