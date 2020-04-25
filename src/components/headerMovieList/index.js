import React from "react";

const headerCss = {
  margin:"auto",
  textAlign:"center"
};

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div style={headerCss}>
        <h2>
          {title + " "}
          <span className="badge badge-pill" style={{backgroundColor:"#0174AD"}}>{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;