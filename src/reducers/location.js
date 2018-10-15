export default function locationReducer(state, action) {
  const newState = Object.assign({}, state, { location: action.payload });

  return newState;
}
