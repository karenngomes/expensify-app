import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortyByAmount,
  sortyByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    const { calendarFocused } = this.state;
    const { dispatch } = this.props;

    if (calendarFocused === "startDate") {
      dispatch(setStartDate(startDate));
    } else {
      dispatch(setEndDate(endDate));
    }
  };

  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  render() {
    const { text, sortyBy, startDate, endDate } = this.props.filters;
    const { calendarFocused } = this.state;

    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={sortyBy}
          onChange={e =>
            this.props.dispatch(
              e.target.value === "date" ? sortyByDate() : sortyByAmount()
            )
          }
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
