import React from "react";
import classes from "./ButtonBasic.module.css";

const ButtonBasic = ({ children }) => {
  return <button className={classes.btn}>{children}</button>;
};

export default ButtonBasic;
