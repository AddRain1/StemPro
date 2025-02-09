import React from "react";

const Question = ({ postDetails }) => {
  return (
    <div>
      <p>{postDetails.description}</p>
    </div>
  );
};

export default Question;
