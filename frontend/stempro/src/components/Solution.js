import React from "react";

const Solution = ({ postDetails }) => {
  return (
    <div>
      <h2>{postDetails.question}</h2>
      <p>{postDetails.answer}</p>
    </div>
  );
};

export default Solution;
