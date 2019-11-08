import React from 'react';
import PropTypes from 'prop-types';

// Components
import DatePicker from 'react-datepicker';
import { ErrorMessage } from '../ErrorMessage';

// icons
import calendar from './icons/calendar.svg';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import styles from './styles.module.css';

export const CustomDatePicker = ({ input, meta, ...custom }) => {
  return (
    <>
      <div className={styles.dateInput}>
        <DatePicker
          onChange={input.onChange}
          {...custom}
          dateForm="MM/DD/YYYY"
          selected={input.value}
        />
        <div className={styles.iconDate}>
          <img src={calendar} alt="Date" />
        </div>
      </div>
      <ErrorMessage meta={meta} />
    </>
  );
};

CustomDatePicker.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ])
  ).isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])
  ).isRequired,
};
