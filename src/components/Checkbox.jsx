import React from "react";

const Checkbox = (props) => {
  const { text, className, ...rest } = props;
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
