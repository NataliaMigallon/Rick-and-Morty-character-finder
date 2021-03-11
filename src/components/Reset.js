import React from "react";

const Reset = (props) => {
  const handleResetClick = () => {
    props.handleReset();
  };
  return (
    <input
      type="button"
      sytle="cursor:pointer"
      className="button"
      value="Reset"
      onClick={handleResetClick}
    ></input>
  );
};
export default Reset;
