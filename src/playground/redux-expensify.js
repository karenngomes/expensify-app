import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "asuhasuah",
      description: "November Rent",
      note: "This was the final payment for that address",
      amout: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortyBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
