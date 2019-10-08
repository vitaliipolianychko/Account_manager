export const DELETE = 'DELETE';
export const ADD = 'ADD';

export const onDeleteTask = taskId => {
  return {
    type: DELETE,
    taskId,
  };
};

export const onAddUser = (userName, password, confirmPassword) => {
    return {
        type: ADD,
        userName,
        password,
        confirmPassword,
    };
};
