import { FETCH_TODOS } from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload.data };
    default:
      return state;
  }
}