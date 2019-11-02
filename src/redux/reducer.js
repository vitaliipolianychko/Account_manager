import { DELETE, ADD } from './actions';

const initialState = { data: [] };
const Users = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			const newUser = {
				...action.payload,
				id: Math.floor((Math.random() * 100) / Math.floor(Math.random() * 5)),
			};
			return {
				...state,
				data: [...state.data, newUser],
			};

		case DELETE:
			return {
				...state,
				data: state.data.filter(
					(task, index) => index !== action.payload.taskId
				),
			};

		default:
			return state;
	}
};

export default Users;
