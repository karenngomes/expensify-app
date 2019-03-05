import moment from "moment";

// Get visible expenses

export default (expenses, { text, sortyBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;

      // convert both strings to lower case
      // includes
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortyBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortyBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
