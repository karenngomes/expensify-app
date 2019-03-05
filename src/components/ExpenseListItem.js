// Export a stateless functional component
// description, amount, creadAt
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = (
  { id, description, amount, createdAt, dispatch },
  ...props
) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
    <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
