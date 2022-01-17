import React from "react";
import classes from "../styles/Button.module.css";

const Button = (props) => {
  const { children } = props;
  return (
    <div className={classes.button}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
