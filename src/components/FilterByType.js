import React from "react";

const FilterByType = (props) => {
  //const preventDefault = (ev) => ev.preventDefault();
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "type",
    });
  };
  return (
    <div className="wrapper__filterName">
      <label className="wrapper__filterName--title">
        Search the type:
        <input
          type="text"
          name="type"
          id="type"
          className="wrapper__filterName--input"
          value={props.type}
          placeholder="ex. 'Morty...'"
          onChange={handleChange}
          // onSubmit={preventDefault}
        />
      </label>
    </div>
  );
};
export default FilterByType;
