import React from "react";
import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <div className="wrapper__filterSpecies">
      <label htmlFor="species" className="wrapper__filterSpecies--title">
        Species:
      </label>
      <select
        name="species"
        id="species"
        className="wrapper__filterSpecies--select"
        value={props.value}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
  );
};
FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default FilterBySpecies;
