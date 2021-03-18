import React from "react";

const InputBox = ({ label = "Default input" }) => {
  return (
    <div className="form-group">
      <label className="font-weight-bold">{label}</label>
      <input type="text" className="form-control" />
    </div>
  );
};

export default InputBox;
