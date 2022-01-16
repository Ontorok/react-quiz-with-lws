import React from "react";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Brand.module.css";

const Brand = () => {
  return (
    <div className={classes.brand}>
      <a href="https://www.google.com">
        <img src={logo} alt="lwslogo" />
        <h3>Learn with Sumit</h3>
      </a>
    </div>
  );
};

export default Brand;
