import React from "react";

const FilterByName = (props) => {
  //console.log(props);
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
      //console.log(ev.target.value);
    });
  };
  return (
    <label>
      Buscar al personaje:
      <input
        type="text"
        name="name"
        id="name"
        value={props.name}
        placeholder="Escribe el nombre del personaje"
        onChange={handleChange}
      />
    </label>
  );
};
export default FilterByName;
