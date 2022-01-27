import React from "react";
import classes from "../styles/ProgessBar.module.css";

const ProgessBar = ({ next, prev, submit, progress }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div
          className={classes.tooltip}
          style={{ right: `calc(100% - ${progress}%)` }}
        >
          {progress}% Complete!
        </div>

        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div
        className={classes.nextButton}
        onClick={progress === 100 ? submit : next}
      >
        {progress === 100 ? (
          <span className="material-icons-outlined">save</span>
        ) : (
          <span className="material-icons-outlined">arrow_forward</span>
        )}
      </div>
    </div>
  );
};

export default ProgessBar;
