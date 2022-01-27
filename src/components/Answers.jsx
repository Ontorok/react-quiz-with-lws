import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ answers, onChangeAnser }) => {
  return (
    <div className={classes.answers}>
      {answers.map((ans, index) => (
        <Checkbox
          key={ans.id}
          className={`${classes.answer}`}
          text={ans.title}
          checked={ans.checked}
          onChange={(e) => onChangeAnser(e, index)}
        />
      ))}

      {/* ${classes.wrong} ${classes.correct} */}
    </div>
  );
};

export default Answers;
