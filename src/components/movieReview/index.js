import React from "react";
import "../componentStyles/styles.css";

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
