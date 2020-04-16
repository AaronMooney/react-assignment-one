import React from "react";

const headerCss = {
  margin:"auto",
  textAlign:"center"
};

const Header = ({ title, numTvShows }) => {
  return (
    <div className="row">
      <div style={headerCss}>
        <h2>
          {title + " "}
          <span className="badge badge-pill badge-success">{numTvShows}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;