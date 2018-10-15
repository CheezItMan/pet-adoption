// A reducer is a function which takes an oldState and an action and returns new state

export default function locationReducer(state = "Seattle, WA", action) {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
  //  const newState = Object.assign({}, state, { location: action.payload });

  //return newState;
}
