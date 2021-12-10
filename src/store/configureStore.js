import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "../reducers/weather";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      weather: weatherReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
