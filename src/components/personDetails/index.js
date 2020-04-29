import React from "react";
import "../movieDetails/movieDetails.css";
import "../componentStyles/styles.css";

export default ({ person, credits }) => {
  return (
    <>
    <div class="container-fluid">
    <div class="row">
		<div class="col-md-12">
			<h3>
        Biography
			</h3>
			<p class="bio">
      { person.biography}			
      </p>
		</div>
	</div>
  <div class="row">
    <div class="col-md-12">
      <div class="detailsItem">
      <h5 class="detailsLabel">
        Birthday
      </h5>
        <span class="detail">
          {person.birthday}
        </span>
      </div>
      <div class="detailsItem">
      <h5 class="detailsLabel">
        Place of Birth
      </h5>
        <span class="detail">
          {person.place_of_birth}
        </span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <h4>Credits</h4>
    </div>
  </div>
  <div class="row">
		<div class="col-md-6">
			<div class="card scroll">
				<h5 class="card-header">
					Cast
				</h5>
				<div class="card-body">
					<p class="card-text">
          {credits?.cast?.map(function(d,index){
            return (<p key={index} class="detailsText" >{d.original_title != null ? d.original_title : d.original_name }</p>)
          })}
					</p>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card scroll">
				<h5 class="card-header">
					Crew
				</h5>
				<div class="card-body">
					<p class="card-text">
          {credits?.crew?.map(function(d,index){
            return (<p key={index} className="detailsText" >{d.original_title != null ? d.original_title : d.original_name }</p>)
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