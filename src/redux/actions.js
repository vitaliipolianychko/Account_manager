export const DELETE = 'DELETE';
export const ADD = 'ADD';

export const onDeleteTask = taskId => {
	return {
		type: DELETE,
		payload: { taskId },
	};
};
export const onAddUser = values => {
	return {
		type: ADD,
		payload: { ...values },
	};
};
