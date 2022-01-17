import React from "react";
import classes from "../styles/Form.module.css";

const Form = (props) => {
  const { children, className, ...rest } = props;
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
