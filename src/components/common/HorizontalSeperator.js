import React from "react";

const HorizontalSeperator = ({
  margin = 20,
  width = 100,
  color = "#e9e9e9",
}) => {
  return (
    <div
      style={{
        width: `${width}%`,
        margin: `${margin}px 0`,
        borderBottom: `2px solid ${color}`,
      }}
    ></div>
  );
};

export default HorizontalSeperator;
