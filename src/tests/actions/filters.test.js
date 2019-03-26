import moment from "moment";
import { setStartDate, setEndDate } from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});
