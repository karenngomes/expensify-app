import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calendarFocused: false,
    error: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;

    this.setState({
      description
    });
  };

  onNoteChange = e => {
    const note = e.target.value;

    this.setState({
      note
    });
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        amount
      });
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = e => {
    e.preventDefault();
    const { description, amount } = this.state;

    if (!description || !amount) {
      this.setState({ error: "Please provide description and amount" });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calendarFocused,
      error
    } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
