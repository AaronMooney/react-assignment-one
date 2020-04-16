import React from "react";
import "../movieDetails/movieDetails.css";
import "../componentStyles/details.css"

export default ({ person, credits }) => {
  return (
    <>
      <h4>Overview</h4>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item detailsText">
          {person.birthday}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Place of Birth
        </li>
        <li key="rdv" className="list-group-item detailsText">
          {person.place_of_birth}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="noel" className="list-group-item list-group-item-dark">
          Biography
        </li>
        <li key="noe" className="list-group-item detailsText">
          {person.biography}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="biogl" className="list-group-item list-group-item-dark">
          Credits
        </li>
        <div className="list-group-item list-unstyled">
          {credits?.cast.map(function(d,index){
            console.log(d)
            return (<li key={index} className="detailsText" >{d.original_title != null ? d.original_title : d.original_name }</li>)
          })}
        </div>
      </ul>
    </>
  );
};