import React from 'react';

import LoginForm from "../LoginForm/LoginForm";
import ProfileForm from "../ProfileForm/ProfileForm";
import ContactsForm from "../ContactsForm/ContactsForm";
import CapabilitiesForm from "../CapabilitiesForm/CapabilitiesForm";
import Tabs from "./Tabs";

class App extends React.Component {
  render() {
    return (
      <Tabs>
        1. Account
        <LoginForm />
          2. Profile
        <ProfileForm />
          3. Contacts
        <ContactsForm />
          4. Capabilities
        <CapabilitiesForm />
      </Tabs>
    );
  }
}


export default App;