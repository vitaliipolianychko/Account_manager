import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import delUser from './icons/Close.svg';
import { onDeleteTask } from '../../redux/reducer';


import styles from './ListOfUsers.module.css';





const mapStateToProps = state => {
	return {
		Data: state.reducerData.Data,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		DeleteTask: taskId => {
			dispatch(onDeleteTask(taskId));
		},
	};
};


function CustomizedTables(props) {
	const { Data, DeleteTask } = props;
	const DataUser = Data.map(task => {
		const {avatar} = task;
		const { users } = task;
		const { company } = task;
		const {email} = task;
		const data = { avatar, users, company, email };
		return data;
	});
	return (
  <div>
    {DataUser.length !== 0 ? (
      <table className={styles.tableHead}>
        <tbody>
          <tr className={styles.trHead}>
            <td className={styles.cell}> Name </td>
            <td className={styles.cell}> Company </td>
            <td className={styles.cell}> Contacts </td>
            <td className={styles.cell}> Last Update </td>
            <td className={styles.cell}>  </td>
          </tr>

          {DataUser.map((task, index) => (
            <tr key={task.id} className={styles.trTable}>
              <td className={styles.cell}>{task.users}</td>
              <td className={styles.cell}>{task.company}</td>
              <td className={styles.cell}>{task.email}</td>
              <td className={styles.cell}>just now</td>
              <td className={styles.cell}>
                <button
                  style={{
					border: 0,
					outline: 'none',
					cursor: 'pointer',
					background: 'white',
				}}
                  onClick={() => {
					DeleteTask(index);
				}}
                >
                  <img src={delUser} alt="my image" />
                </button>
              </td>
            </tr>
					))}
        </tbody>
      </table>
)
  : (
    <div>
      <table className={styles.tableHead}> 
        <tbody>
          <tr className={styles.trHead}>
            <td className={styles.cell}> Name </td>
            <td className={styles.cell}> Company </td>
            <td className={styles.cell}> Contacts </td>
            <td className={styles.cell}> Last Update </td>
            <td className={styles.cell}>  </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.noUsers}>
        <span>No users here :(</span> 
        <NavLink to="/addUser/account">
          <button className={styles.createUser}>Create new user</button>
        </NavLink>
      </div>
    </div>
  )}
  </div>
	);
}
CustomizedTables = connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomizedTables);
export default CustomizedTables;
