import React from "react";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={updates => {
          props.dispatch(editExpense(props.expense.id, updates));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
