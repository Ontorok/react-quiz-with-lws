import React, { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], onChangeAnswer, useAnalysis }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {useAnalysis ? (
            <Checkbox
              key={index}
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => onChangeAnswer(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              } `}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
