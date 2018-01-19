
import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/todos';

export function fetchTodos() {
  const request = axios.get(`${ROOT_URL}`);

  return {
		type: FETCH_TODOS,
		payload: request
	};
}
