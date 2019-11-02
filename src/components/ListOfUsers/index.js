import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import delUser from './icons/Close.svg';
import { onDeleteTask } from '../../redux/actions';
import styles from './styles.module.css';

const mapStateToProps = state => {
	return {
		data: state.Users.data,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		DeleteTask: taskId => {
			dispatch(onDeleteTask(taskId));
		},
	};
};

let UsersList = props => {
	const { data, DeleteTask } = props;
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
										className={styles.buttonTable}
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
							<button className={styles.createUser}>Create new user</button>
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};
UsersList = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersList);
export default UsersList;
