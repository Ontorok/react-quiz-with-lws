import React from "react";
import classes from "../styles/Illustration.module.css";

const Illustration = (props) => {
  const { imgSource } = props;
  return (
    <div className={classes.illustration}>
      <img src={imgSource} alt="SignUp" />
    </div>
  );
};

export default Illustration;
