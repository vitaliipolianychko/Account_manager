export const CustomStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? ' #657C9A' : ' #657C9A',
    background: state.isSelected ? '#E7F0FF' : '#FFFFFF',
    paddingTop: 10,
    borderRadius: 0,
    border: 'none',
  }),
  control: base => ({
    ...base,
    border: '1px solid #C1CFE0',
    borderRadius: 0,
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #C1CFE0',
    },
  }),
};
