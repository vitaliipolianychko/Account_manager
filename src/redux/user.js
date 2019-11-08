import { DELETE_USER, ADD_USER } from './actions';

const initialState = { data: [] };
const Users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUser = {
        ...action.payload,
      };
      return {
        ...state,
        data: [...state.data, newUser],
      };

    case DELETE_USER:
      return {
        ...state,
        data: state.data.filter(
          (task, index) => index !== action.payload.userId
        ),
      };

    default:
      return state;
  }
};

export default Users;
