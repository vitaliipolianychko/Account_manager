/*
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

function NavTabs(props) {

  
  return (
    <AppBar position="static">
      <Tabs
        centered
        variant="fullWidth"
      >
        <Tab label="1. Account"  />
        <Tab label="2. Profile"  />
        <Tab label="3. Contacts" />
        <Tab label="3. Capabilities" />
      </Tabs>
    </AppBar>
  );
}

export default NavTabs;
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {SubmissionError} from 'redux-form';
import LoginForm from "../LoginForm";
import ProfileForm from "../ProfileForm";
import ContactsForm from "../ContactsForm";
import CapabilitiesForm from "../CapabilitiesForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

/* TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
*/

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const submit = input=>{
    if(['Настя', 'Леша', 'Миша', 'Света'].includes (input.username)){
      throw new SubmissionError ({
        username : "Имя пользователя уже существует",
      });
    }else{
      window.alert (JSON.stringify(input));
    }
};

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
          <Tab label="1. Account" {...a11yProps(0)} />
          <Tab label="2. Profile" {...a11yProps(1)} />
          <Tab label="3. Contacts" {...a11yProps(2)} />
          <Tab label="4. Capabilities" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LoginForm onSubmit={submit} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContactsForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CapabilitiesForm />
      </TabPanel>
    </div>
  );
}