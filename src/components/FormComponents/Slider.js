import React, { useState } from "react";

const Slider = ({
  label = "slider",
  minValue = 0,
  maxValue = 100,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue || 50);
  return (
    <div className="form-group">
      <label htmlFor="customRange1" className="font-weight-bold">
        {label}
      </label>
      <div className="d-flex justify-content-between">
        <span className="font-weight-bold blue-text mr-2">{minValue}</span>
        <span className="font-weight-bold blue-text mr-2">{maxValue}</span>
      </div>
      <input
        min={minValue}
        max={maxValue}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="range"
        className="custom-range"
        id="customRange1"
      />
    </div>
  );
};

export default Slider;
