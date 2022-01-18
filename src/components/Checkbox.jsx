import React from "react";

const Checkbox = (props) => {
  const { text, ...rest } = props;
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
