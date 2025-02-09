import React from "react";

const Question = ({ postDetails }) => {
  return (
    <div>
      <h2>{postDetails.question}</h2>
      <p>{postDetails.description}</p>
    </div>
  );
};

export default Question;
