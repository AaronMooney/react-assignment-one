import React from "react";

const headerCss = {
  margin:"auto",
  textAlign:"center"
};

const Header = ({ numPeople }) => {
  return (
    <div className="row">
      <div style={headerCss}>
        <h2>
          All People{" "}
          <span className="badge badge-pill badge-success">{numPeople}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;