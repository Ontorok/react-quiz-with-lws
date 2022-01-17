import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test answer" />

      <Checkbox className={classes.answer} text="Test answer" />

      <Checkbox className={classes.answer} text="Test answer" />

      <Checkbox
        className={`${classes.answer} ${classes.wrong}`}
        text="Test answer"
      />

      <Checkbox className={classes.answer} text="Test answer" />

      <Checkbox className={classes.answer} text="Test answer" />

      <Checkbox
        className={`${classes.answer} ${classes.correct}`}
        text="Test answer"
      />

      <Checkbox className={classes.answer} text="Test answer" />
      <Checkbox className={classes.answer} text="Test answer" />
      <Checkbox className={classes.answer} text="Test answer" />
    </div>
  );
};

export default Answers;
