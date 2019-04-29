import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const id = "123zbc";
  const action = editExpense(id, { note: "New note value" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123zbc",
    updates: {
      note: "New note value"
    }
  });
});
