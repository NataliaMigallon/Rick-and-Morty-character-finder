import React from "react";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
    //console.log("species", ev.target.value);
  };
  return (
    <div className="wrapper__filterSpecies">
      <label className="wrapper__filterSpecies--title">
        Species:
        <select
          name="species"
          id="species"
          className="wrapper__filterSpecies--select"
          onChange={handleChange}
        >
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </label>
    </div>
  );
};
export default FilterBySpecies;
