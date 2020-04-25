import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TvShowHeader = ({ tvShow }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {tvShow.name}
          {"  "}
          <a href={tvShow.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default TvShowHeader;