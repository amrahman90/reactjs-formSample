import React from "react";

const Row = ({ children, type }) => {
  let styles = {
    background: type === "dark" ? "#eeeeee" : "#fff",
    padding: ".8rem 5rem",
  };
  return <div style={styles}>{children}</div>;
};

export default Row;
