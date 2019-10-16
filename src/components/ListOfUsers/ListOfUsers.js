import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import delUser from './icons/Close.svg';
import { onDeleteTask } from '../../redux/reducer';

const useStyles = makeStyles(() => ({
	root: {
		width: '80%',
		overflowX: 'auto',
		marginTop: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	table: {
		minWidth: 700,
	},
	backTableRoot: {
		background: 'white',
		color: 'silver',
	},
	link: {
		textDecoration: 'none',
	},
}));

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
	const classes = useStyles();
	const DataUser = Data.map(task => {
		const { users } = task;
		const { firstName } = task;
		const { lastName } = task;
		const { company } = task;
		const data = { users, firstName, lastName, company };
		return data;
	});
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow className={classes.backTableRoot}>
						<TableCell align="left" variant="head">
							Name
						</TableCell>
						<TableCell align="left" variant="head">
							first Name
						</TableCell>
						<TableCell align="left" variant="head">
							last Name
						</TableCell>
						<TableCell align="left" variant="head">
							company
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{DataUser.map((task, index) => (
						<TableRow key={task.id}>
							<TableCell align="left">{task.users}</TableCell>
							<TableCell align="left">{task.firstName}</TableCell>
							<TableCell align="left">{task.lastName}</TableCell>
							<TableCell align="left">{task.company}</TableCell>
							<TableCell align="left">
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
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}
CustomizedTables = connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomizedTables);
export default CustomizedTables;
