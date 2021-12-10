export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return [...state, action.payload.data];
    default:
      // console.log("action received", action);
      return state;
  }
};
