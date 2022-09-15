import React from "react";
import classes from "./SelectBasic.module.css";

const SelectBasic = ({ options, defaultValue }) => {
  return (
    <select>
      <option value="">{defaultValue}</option>
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBasic;
