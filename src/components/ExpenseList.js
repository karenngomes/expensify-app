import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    <ul>
      {expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
