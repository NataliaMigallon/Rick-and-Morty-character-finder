import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const preventDefault = (ev) => ev.preventDefault();
  return (
    <section className="filter__section">
      <form onSubmit={preventDefault} className="filter__section--form">
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
