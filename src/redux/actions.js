export const DELETE_USER = 'USER_DELETE';
export const ADD_USER = 'USER_ADD';

export const deleteUserAction = userId => ({
  type: DELETE_USER,
  payload: { userId },
});
export const addUserAction = (values, userId) => ({
  type: ADD_USER,
  payload: { ...values, id: userId },
});
