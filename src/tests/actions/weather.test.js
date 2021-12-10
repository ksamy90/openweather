import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchWeather, startFetchWeather } from "../../actions/weather";

const createMockStore = configureMockStore([thunk]);

test("should setup fetch weather value with provided city", () => {
  const city = "berlin";
  const action = fetchWeather(city);
  expect(action).toEqual({
    type: "FETCH_WEATHER",
    payload: city,
  });
});

test("should fetch weather data from external api", () => {
  const store = createMockStore({});
  const city = "Munich";

  store.dispatch(startFetchWeather(city)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "FETCH_WEATHER",
      payload: city,
    });
  });
});
