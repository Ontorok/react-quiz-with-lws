import React, { Fragment } from "react";
import { v4 as uuid } from "uuid";
import classes from "../styles/Question.module.css";
import Answers from "./Answers";

const Questions = ({ answers = [] }) => {
  return (
    <Fragment>
      {answers.map((ans) => (
        <div className={classes.question} key={uuid()}>
          <div className={classes.qtitle}>
            <span className={`material-icons-outlined`}> help_outline </span>
            {ans.title}
          </div>
          <Answers useAnalysis={false} options={ans.options} />
        </div>
      ))}
    </Fragment>
  );
};

export default Questions;
