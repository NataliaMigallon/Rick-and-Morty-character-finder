import React from "react";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <section>
      <form action="">
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
