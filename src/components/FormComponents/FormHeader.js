import React from "react";

const FormHeader = ({ count, label }) => {
  const styles = {
    containerStyle: {
      background: "#fd8401",
      margin: "8px 0",
      padding: "8px 4rem",
      color: "white",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center"
    },
    stepCountStyle: {
      background: "white",
      color: "#fd8401",
      fontSize: "1.4rem",
      borderRadius: "50%",
      textAlign: "center",
      fontWeight: "800",
      marginRight: "1rem",
      width: "40px",
      height: "40px",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center"
    },
  };

  return (
    <div style={styles.containerStyle}>
      <span style={styles.stepCountStyle}>{count}</span>
      <h6>{label}</h6>
    </div>
  );
};

export default FormHeader;
