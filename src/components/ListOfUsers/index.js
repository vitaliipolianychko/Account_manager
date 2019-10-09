import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


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

 function CustomizedTables(props) {
  const { Data } = props;
  const classes = useStyles();
  const DataUser = Data.map(task => {
    const { users } = task;
    const {firstName} = task;
    const {lastName}=task;
    const {company} = task;
    const data = { users, firstName, lastName,company };
    return data;
  });
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.backTableRoot}>
            <TableCell align="left" variant="head">
              №
            </TableCell>
            <TableCell align="left" variant="head">
              Tasks
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
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{task.users}</TableCell>
              <TableCell align="left">{task.firstName}</TableCell>
              <TableCell align="left">{task.lastName}</TableCell>
              <TableCell align="left">{task.company}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
CustomizedTables = connect(mapStateToProps)(CustomizedTables);
export default CustomizedTables;
