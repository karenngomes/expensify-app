// Export a stateless functional component
// description, amount, creadAt
import React from "react";

const ExpenseListItem = ({ description, amount, creadAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount}</p>
    <p>{creadAt}</p>
  </div>
);

export default ExpenseListItem;
