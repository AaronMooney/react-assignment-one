import React from "react";
import "./movieDetails.css";
import "../componentStyles/styles.css"

export default ({ movie }) => {
  return (
    <>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3>
            Overview
          </h3>
          <p class="bio">
            {movie.overview}
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
              {movie.runtime}
            </span>
          </div>
          <div class="detailsItem">
          <h5 class="detailsLabel">
            Release Date
          </h5>
          <span class="detail">
            {movie.release_date}
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
          {movie.genres?.map(function(d,index){
            return (<p key={index} class="detailsText" >{d.name}</p>)
          })}
					</p>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="card scroll">
				<h5 class="card-header">
          Spoken Languages
				</h5>
				<div class="card-body">
					<p class="card-text">
          {movie.spoken_languages?.map(function(lang){
            return (<p key={lang.name} className="detailsText" >{lang.name}</p>)
          })}
					</p>
				</div>
      </div>
    </div>
    <div class="col-md-3">
			<div class="card scroll">
				<h5 class="card-header">
          Production Companies
				</h5>
				<div class="card-body">
					<p class="card-text">
          {movie.production_companies?.map(function(c){
            return (<p key={c.name} className="detailsText" >{c.name}</p>)
          })}
					</p>
				</div>
      </div>
    </div>
    <div class="col-md-3">
			<div class="card scroll">
				<h5 class="card-header">
          Production Countries
				</h5>
				<div class="card-body">
					<p class="card-text">
          {movie.production_countries?.map(function(c){
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