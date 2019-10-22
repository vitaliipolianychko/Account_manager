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
					avatar: action.avatar,
					users: action.userName,
					passwords: action.password,
					confirmPasswords: action.confirmPassword,
					firstName: action.firstName,
					lastName: action.lastName,
					email: action.email,
					birthDay: action.birthDay,
					address: action.address,
					sex: action.sex,
					company: action.company,
					github: action.github,
					facebook: action.facebook,
					language: action.language,
					fax: action.fax,
					phoneOne: action.phoneOne,
					skills: action.skills,
					notes: action.notes,
					art: action.art,
					sport: action.sport,
					justPlay: action.justPlay,
					female: action.female, 
					guitar: action.guitar, 
					wtf: action.wtf
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


export default reducerData;

// Action Creators
export const onDeleteTask = taskId => {
	return {
		type: DELETE,
		taskId,
	};
};
export const onAddUser = (
	avatar,
	userName,
	password,
	confirmPassword,
	firstName,
	lastName,
	email,birthDay,
	address,
	sex,
	company,
	github,
	facebook,
	language,
	fax,
	phoneOne, skills, notes, art, sport, justPlay, female, guitar, wtf
) => {
	return {
		type: ADD,
		avatar,
		userName,
		password,
		confirmPassword,
		firstName,
		lastName,
		email,birthDay,
		address,
		sex,
		company,
		github,
		facebook,
		language,
		fax,
		phoneOne, skills, notes, art, sport, justPlay, female, guitar, wtf
	};
};
