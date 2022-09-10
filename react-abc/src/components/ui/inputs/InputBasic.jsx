import React from "react";
import classes from "./InputBasic.module.css";

const InputBasic = props => {
  return <input {...props} className={classes.input} />;
};

export default InputBasic;
