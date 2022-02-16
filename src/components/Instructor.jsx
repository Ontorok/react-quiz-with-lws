import React from "react";
import sumit from "../assets/images/sumit-saha.jpg";
import classes from "../styles/Instructor.module.css";

const Instructor = () => {
  return (
    <div className={classes.instructors}>
      <div className={classes.instructor}>
        <img src={sumit} alt="sumit saha" />
        <p>Sumit Saha</p>
      </div>
      <div className={classes.instructor}>
        <img src={sumit} alt="H M Nayeem" />
        <p>H M Nayeem</p>
      </div>
      <div className={classes.instructor}>
        <img src={sumit} alt="Anisul Haque" />
        <p>Anisul Haque</p>
      </div>
      <div className={classes.instructor}>
        <img src={sumit} alt="Kudvenkat" />
        <p>Kudvenkat</p>
      </div>
    </div>
  );
};

export default Instructor;
