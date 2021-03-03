import React from "react";

const FilterByName = (props) => {
  //console.log(props);
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
    //console.log(ev.target.value);
  };
  return (
    <label>
      Buscar al personaje:
      <input
        type="text"
        name="name"
        id="name"
        value={props.name} //no sé si esto es correcto pero funciona
        placeholder="Escribe el nombre del personaje"
        onChange={handleChange}
      />
    </label>
  );
};
export default FilterByName;
