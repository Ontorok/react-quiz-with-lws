import React, { useMemo } from "react";
import bad from "../assets/images/badge/bad.png";
import best from "../assets/images/badge/best.png";
import good from "../assets/images/badge/good.png";
import successImg from "../assets/images/badge/success.png";
import classes from "../styles/Summary.module.css";

const Summary = ({ score, noq }) => {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return bad;
    } else if ((score / (noq * 5)) * 100 < 75) {
      return good;
    } else if ((score / (noq * 5)) * 100 < 100) {
      return best;
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
