import React from "react";
import { useParams } from "react-router-dom";

const Discussion = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Discussion</h2>
      <p>This is where users can discuss the problem.</p>
    </div>
  );
};

export default Discussion;
