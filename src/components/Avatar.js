import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import test123 from './svg/test.jpg';

const useStyles = makeStyles({
	bigAvatar: {
		margin: 10,
		width: 200,
		height: 200,
	},
});

export default function ImageAvatars() {
	const classes = useStyles();

	return (
		<Grid container justify="center" alignItems="center">
			<Avatar alt="Remy Sharp" src={test123} className={classes.bigAvatar} />
		</Grid>
	);
}
