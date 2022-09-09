import React from "react";
import classes from "./ButtonBasic.module.css";

const ButtonBasic = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
};

export default ButtonBasic;
