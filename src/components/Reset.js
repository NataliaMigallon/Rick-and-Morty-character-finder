import React from "react";

const Reset = (props) => {
  const handleResetClick = () => {
    props.handleReset();
  };
  return (
    <button
      sytle="cursor:pointer"
      className="button"
      onClick={handleResetClick}
    >
      Reset
    </button>
  );
};
export default Reset;
