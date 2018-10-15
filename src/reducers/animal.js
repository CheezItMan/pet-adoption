// A reducer is a function which takes an oldState and an action and returns new state

export default function animalReducer(state = "dog", action) {
  if (action.type === "SET_ANIMAL") {
    return action.payload;
  } else {
    return state;
  }
}
