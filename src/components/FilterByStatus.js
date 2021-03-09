import React from "react";

const FilterByStatus = (props) => {
  console.log(props);
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "status",
      checked: ev.target.checked,
    });
  };
  const statusElements = props.allStatus.map((statusItem, index) => {
    return (
      <label key={index} className="wrapper__filterStatus--option">
        {statusItem}
        <input
          type="checkbox"
          name="status"
          id="status"
          className="wrapper__filterStatus--input"
          value={statusItem}
          onChange={handleChange}
          checked={props.statusFilter.includes(statusItem)}
        />
      </label>
    );
  });
  return (
    <div className="wrapper__filterStatus">
      <label className="wrapper__filterStatus--title">Status:</label>
      {statusElements}
    </div>
  );
};
export default FilterByStatus;
