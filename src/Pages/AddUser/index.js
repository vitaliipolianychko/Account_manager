import React from 'react';
import PropTypes from 'prop-types';
// Copmponents
import Tabs from '../../components/Form/Tabs';
import AccountForm from './Forms/AccountForm';
import ProfileForm from './Forms/ProfileForm';
import ContactsForm from './Forms/ContactsForm';
import CapabilitiesForm from './Forms/CapabilitiesForm';
// styles
import styles from './styles.module.css';

const AddUser = props => {
  const { match } = props;
  const { path } = match;
  const tabs = [
    { title: '1. Account', path: `${path}/account`, component: AccountForm },
    { title: '2. Profile', path: `${path}/profile`, component: ProfileForm },
    { title: '3. Contacts', path: `${path}/contacts`, component: ContactsForm },
    {
      title: '4. Capabilities',
      path: `${path}/capabilities`,
      component: CapabilitiesForm,
    },
  ];
  return (
    <div>
      <div className={styles.title}>
        <span>Adding new user</span>
      </div>
      <Tabs tabs={tabs} path={path} />
    </div>
  );
};
export default AddUser;

AddUser.defaultProps = {
  path: '/addUser',
};

AddUser.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object])
  ).isRequired,
  path: PropTypes.string,
};
