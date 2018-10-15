// A reducer is a function which takes an oldState and an action and returns new state

export default function breedsReducer(state = [], action) {
  if (action.type === "SET_BREEDS") {
    return action.payload;
  } else {
    return state;
  }
}
