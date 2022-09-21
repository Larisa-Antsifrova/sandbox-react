import React from "react";
import classes from "./ModalBasic.module.css";

const ModalBasic = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modal__content}>{children}</div>
    </div>
  );
};

export default ModalBasic;
