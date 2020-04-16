import React from "react";
import "../componentStyles/details.css";

export default ({ review }) => {
  return (
    <>
      <div className="review">
        <p>Review By: {review.author} </p>
        <p>{review.content} </p>
      </div>
    </>
  );
};
