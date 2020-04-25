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
          <span className="badge badge-pill" style={{backgroundColor:"#0174AD"}}>{numPeople}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;