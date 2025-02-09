import React from "react";

const Solution = ({ postDetails }) => {
  return (
    <div>
      <h2>Solution</h2>
      <p>{postDetails.answer}</p>
    </div>
  );
};

export default Solution;
