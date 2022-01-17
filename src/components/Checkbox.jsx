import React from "react";

const Checkbox = (props) => {
  const { text, ...rest } = props;
  return (
    <label {...rest}>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
