import React from "react";
import classes from "../styles/Button.module.css";

const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <button className={classes.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
