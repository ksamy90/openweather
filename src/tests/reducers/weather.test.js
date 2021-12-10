import weatherReducer from "../../reducers/weather";

test("shoul set default state", () => {
  const state = weatherReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});
