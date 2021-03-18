import React from "react";

const DatePicker = ({ label }) => {
  const styles = {
    containerStyles: {
      width: "100%",
    },
    dateInputStyles: {
      width: "100%",
      outline: "none",
      padding: ".5rem .8rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
  };

  return (
    <div className="form-group">
      <label className="font-weight-bold">{label}</label>
      <div style={styles.containerStyles}>
        <input type="date" style={styles.dateInputStyles} />
      </div>
    </div>
  );
};

export default DatePicker;
