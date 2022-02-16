import React, { useRef, useState } from "react";
import classes from "../styles/ProgessBar.module.css";

const ProgessBar = ({ next, prev, submit, progress }) => {
  const tooltipRef = useRef();

  const [tooptip, setTooptip] = useState(false);

  function toggleTooptip() {
    if (tooptip) {
      setTooptip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooptip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progress}% Complete!
        </div>

        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooptip}
            onMouseOut={toggleTooptip}
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
