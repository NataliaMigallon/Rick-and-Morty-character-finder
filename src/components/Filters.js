import React from "react";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  const preventDefault = (ev) => ev.preventDefault();
  return (
    <section>
      <form onSubmit={preventDefault}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <button className="form__reset" onClick={props.handleClick}>
          <i className="form__reset--icon far fa-trash-alt"></i>Reset
        </button>
      </form>
    </section>
  );
};
export default Filters;
