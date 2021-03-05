import React from "react";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <div className="wrapper__filterName">
      <label className="wrapper__filterName--title">
        Search the character:
        <input
          type="text"
          name="name"
          id="name"
          className="wrapper__filterName--input"
          value={props.name}
          placeholder="ex. 'Morty...'"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
FilterByName.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default FilterByName;
