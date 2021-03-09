import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import Reset from "./Reset";
import PropTypes from "prop-types";

const Filters = (props) => {
  const preventDefault = (ev) => ev.preventDefault();
  return (
    <section className="filter__section">
      <form onSubmit={preventDefault} className="filter__section--form">
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <div className="wrapper_filter_reset">
          <FilterBySpecies
            handleFilter={props.handleFilter}
            value={props.value}
          />
          <Reset handleReset={props.handleReset} />
        </div>
        <div>
          <FilterByStatus
            handleFilter={props.handleFilter}
            allStatus={props.allStatus}
            statusFilter={props.statusFilter}
          />
        </div>
      </form>
    </section>
  );
};
Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Filters;
