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
	switch (action.type) {
		case ADD:
				const newUser = {
					id: state.Data.length,
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
				return  {
					...state,
					Data: [...state.Data, newUser],
				};


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
