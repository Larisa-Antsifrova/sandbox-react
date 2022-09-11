import React from "react";
import classes from "./InputBasic.module.css";

const InputBasic = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} className={classes.input} />;
});

export default InputBasic;
