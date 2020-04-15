import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonHeader = ({ person }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {person.name}
        </h2>
      </div>
    </div>
  );
};

export default PersonHeader;