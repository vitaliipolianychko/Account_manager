import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import delUser from './icons/Close.svg';
import { deleteUserAction } from '../../../../redux/actions';
import styles from './styles.module.css';

const mapStateToProps = state => {
  return {
    data: state.users.data,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteUser: userId => {
      dispatch(deleteUserAction(userId));
    },
  };
};

const UsersList = ({ data, deleteUser }) => {
  return (
    <div>
      {data.length !== 0 ? (
        <table className={styles.tableHead}>
          <tbody>
            <tr className={styles.trHead}>
              <td className={styles.cell}> Name </td>
              <td className={styles.cell}> Company </td>
              <td className={styles.cell}> Contacts </td>
              <td className={styles.cell}> Last Update </td>
              <td className={styles.cell}> </td>
            </tr>

            {data.map((task, index) => (
              <tr key={task.id} className={styles.trTable}>
                <td className={styles.cell}>{task.userName}</td>
                <td className={styles.cell}>{task.company}</td>
                <td className={styles.cell}>{task.email}</td>
                <td className={styles.cell}>just now</td>
                <td className={styles.cell}>
                  <button
                    type="button"
                    className={styles.buttonTable}
                    onClick={() => {
                      deleteUser(index);
                    }}
                  >
                    <img src={delUser} alt="delete user" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <table className={styles.tableHead}>
            <tbody>
              <tr className={styles.trHead}>
                <td className={styles.cell}> Name </td>
                <td className={styles.cell}> Company </td>
                <td className={styles.cell}> Contacts </td>
                <td className={styles.cell}> Last Update </td>
                <td className={styles.cell}> </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.noUsers}>
            <span>No users here :(</span>
            <NavLink to="/addUser/account">
              <button type="button" className={styles.createUser}>
                Create new user
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

UsersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.object),
      ])
    )
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
