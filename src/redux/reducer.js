// Actions
const DELETE = 'DELETE';
const ADD = 'ADD';

// reducer
const locStorage = JSON.parse(localStorage.getItem('key'));
let initialState;
if (!locStorage) {
	initialState = {
		Data: [],
	};
} else {
	initialState = {
		Data: locStorage.Data,
	};
}
const reducerData = (state = initialState, action) => {
	let stateCopy;
	switch (action.type) {
		case ADD:
			if (state.Data.length === 0) {
				const newUser = {
					id: 0,
					users: action.userName,
					passwords: action.password,
					confirmPasswords: action.confirmPassword,
					firstName: action.firstName,
					lastName: action.lastName,
					email: action.email,
					address: action.address,
					sex: action.sex,
					company: action.company,
					github: action.github,
					facebook: action.facebook,
					language: action.language,
					fax: action.fax,
					phoneOne: action.phoneOne,
				};
				stateCopy = {
					...state,
					Data: [...state.Data, newUser],
				};
			} else {
				const lastElement = state.Data[state.Data.length - 1].id;
				const newUser = {
					id: lastElement + 1,
					users: action.userName,
					passwords: action.password,
					confirmPasswords: action.confirmPassword,
					firstName: action.firstName,
					lastName: action.lastName,
					email: action.email,
					address: action.address,
					sex: action.sex,
					company: action.company,
					github: action.github,
					facebook: action.facebook,
					language: action.language,
					fax: action.fax,
					phoneOne: action.phoneOne,
				};
				stateCopy = {
					...state,
					Data: [...state.Data, newUser],
				};
			}
			return stateCopy;

		case DELETE:
			return {
				...state,
				Data: state.Data.filter((task, index) => index !== action.taskId),
			};

		default:
			return state;
	}
};

// Action Creators
export const onDeleteTask = taskId => {
	return {
		type: DELETE,
		taskId,
	};
};
export const onAddUser = (
	userName,
	password,
	confirmPassword,
	firstName,
	lastName,
	email,
	address,
	sex,
	company,
	github,
	facebook,
	language,
	fax,
	phoneOne
) => {
	return {
		type: ADD,
		userName,
		password,
		confirmPassword,
		firstName,
		lastName,
		email,
		address,
		sex,
		company,
		github,
		facebook,
		language,
		fax,
		phoneOne,
	};
};

export default reducerData;
