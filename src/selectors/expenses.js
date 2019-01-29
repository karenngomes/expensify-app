// Get visible expenses

export default (expenses, { text, sortyBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
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
