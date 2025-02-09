import React from "react";
import { useParams } from "react-router-dom";

const Question = () => {
  const { id } = useParams();  // Get the problem ID from the URL

  return (
    <div>
      <h2>Question</h2>
      <p>This is where the problem question will be displayed.</p>
    </div>
  );
};

export default Question;
