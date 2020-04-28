import React from "react";
import "../movieDetails/movieDetails.css";
import "../componentStyles/styles.css";

export default ({ person, credits }) => {
  return (
    <>
    <div class="container-fluid">
    <div class="row">
		<div class="col-md-12">
			<h4 class="text-center">
        Overview
			</h4>
			<h3>
        Biography
			</h3>
			<p>
      { person.biography}			
      </p>
		</div>
	</div>
  <div class="row">
    <div class="col-md-12">
      <h5>
        Birthday
      </h5>
      <p>
        {person.birthday}
      </p>
      <h5>
        Place of Birth
      </h5>
      <p>
      {person.place_of_birth}
      </p>
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