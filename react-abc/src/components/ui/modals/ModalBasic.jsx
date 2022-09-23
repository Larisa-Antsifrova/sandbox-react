import React from "react";
import classes from "./ModalBasic.module.css";

const ModalBasic = ({ children, visible, setVisible }) => {
  const modalClasses = [classes.modal];

  if (visible) {
    modalClasses.push(classes.active);
  }

  return (
    <div className={modalClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modal__content}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalBasic;
