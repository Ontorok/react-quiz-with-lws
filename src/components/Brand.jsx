import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Brand.module.css";

const Brand = () => {
  return (
    <div className={classes.brand}>
      <Link to="/">
        <img src={logo} alt="lwslogo" />
        <h3>Learn with Sumit</h3>
      </Link>
    </div>
  );
};

export default Brand;
