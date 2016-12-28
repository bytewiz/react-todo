import { List, Map } from "immutable";

const initState = List();

const todos = ( state = initState, action ) => {
  console.log("STATE", state);
  switch (action.type) {
    case "ADD_TODO":
      return state.push(Map(action.payload))

    case "TOGGLE_TODO":
      return state.map((item) => {
        if (item.get('id') === action.payload.id) {
          return item.update('completed', completed => !completed)
        } else {
          return item
        }
      });
    case "DELETE_TODO":
      return state.filterNot(
          (item) => item.get('id') === action.payload.id
      );
    default:
      return state;

  }
}

export default todos;
