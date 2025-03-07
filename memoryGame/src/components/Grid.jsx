import React from "react";
import "./styles.css";

const Grid = () => {
  return (
    <div className="grid">
      {Array(16)
        .fill(null)
        .map((_, index) => (
          <div className="box">{index + 1}</div>
        ))}
    </div>
  );
};

export default Grid;
