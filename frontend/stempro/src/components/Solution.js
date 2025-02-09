import React from "react";
import { useParams } from "react-router-dom";

const Solution = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Solution</h2>
      <p>This is where the solution will be explained.</p>
    </div>
  );
};

export default Solution;
