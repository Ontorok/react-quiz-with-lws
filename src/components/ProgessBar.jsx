import React from "react";
import classes from "../styles/ProgessBar.module.css";

const ProgessBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Complete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>

      <a href="result.html">
        <div className={classes.nextButton}>
          <span className="material-icons-outlined"> arrow_forward </span>
        </div>
      </a>
    </div>
  );
};

export default ProgessBar;
