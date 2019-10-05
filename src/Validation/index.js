export const requiredInput = (input) =>
  input ? undefined : `Требуется ввод`;
export const matchInput = (input, allInputs) =>
  input === allInputs.password ? undefined : 'Пароль не совпадает';