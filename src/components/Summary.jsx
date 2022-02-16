import React, { useMemo } from "react";
import successImg from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";

const Summary = ({ score, noq }) => {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return successImg;
    } else if ((score / (noq * 5)) * 100 < 75) {
      return successImg;
    } else if ((score / (noq * 5)) * 100 < 100) {
      return successImg;
    } else {
      return successImg;
    }
  }, [score, noq]);

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={getKeyword} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
