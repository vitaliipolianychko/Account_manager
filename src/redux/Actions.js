export const DELETE = 'DELETE';
export const ADD = 'ADD';

export const onDeleteTask = taskId => {
  return {
    type: DELETE,
    taskId,
  };
};
export const onAddUser = (userName, password, confirmPassword, firstName, lastName, email, address, sex,company, github, facebook, language, fax, phoneOne) => {
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
      phoneOne
  };
};

