import React from "react";

const Box = ({ children, type = "outlined" }) => {
  const styleTypes = {
    container: {
      padding: "14px 12px",
      borderRadius: "5px",
      margin: "5px 0",
    },
    contained: {
      background: "#ddd",
    },
    outlined: {
      border: "1px solid #ddd",
    },
  };

  return (
    <div style={{ ...styleTypes.container, ...styleTypes[type] }}>
      {children}
    </div>
  );
};

export default Box;
