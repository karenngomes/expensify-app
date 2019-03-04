import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortyByAmount, sortyByDate } from "../actions/filters";

const ExpenseListFilters = ({ filters, dispatch }) => {
  const { text, sortyBy } = filters;
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => dispatch(setTextFilter(e.target.value))}
      />
      <select
        value={sortyBy}
        onChange={e =>
          dispatch(e.target.value === "date" ? sortyByDate() : sortyByAmount())
        }
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
