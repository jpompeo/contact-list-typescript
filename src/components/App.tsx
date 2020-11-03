import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
import EditForm from './EditForm';
import _ from 'lodash';
import { defaultContactInfo } from "../data/contact-info";
import '../styles/App.css';
import { Contact, ContactId, AddContact, DeleteContact, EditContact } from '../types/generalTypes';

// const ComponentName: ComponentType<PropsInterface> = (props): ReturnType => {}
const App: React.FC = (): JSX.Element => {

  //TODO: remove when context is fully setup
/*
  //to hold all data for contact list and details
  const [contacts, setContacts] = useState<Contact[]>([...defaultContactInfo]); // default contacts to display

  //to store information on selected contact for editing
  const [contactToEdit, setContactToEdit] =  useState<Contact>({
    id: 0,
    name: '',
    email: '',
    phone: '',
    image: ''
  });

  // add new contact to app state with input from contact form
  const addContact: AddContact = (newContact) =>  {
    setContacts(oldContacts => { return [...oldContacts, newContact] });
  }

  //remove targeted contact from app state
  const removeContact: DeleteContact = (contactId)=>  {
    //get current state of contacts from app
    const currentContacts: Contact[] = [...contacts];

    //find index of contact to remove
    const index: number = _.findIndex(currentContacts, (contact) => { return contact.id === contactId; });

    //make sure index was found
    if (index > -1) {
      //remove contact from array
      currentContacts.splice(index, 1);

      //set state of contacts to new array
      setContacts(currentContacts);

    } else {
      console.log('Could not find contact to remove')
    }
  }

  // change state of contactToEdit on App (for edit form to use)
  const editContact: EditContact = (contactId) => {
    //find selected contact in array of contacts in app state
    const clickedContact = _.find(contacts, (contact) => { return contact.id === contactId; })

    //set as contact to edit on app state
    clickedContact ? setContactToEdit(clickedContact) : alert("Could not find contact to edit");
  }
*/

  return (
      <div id="app">
        {/* to direct which component to display based on url path */}
        <Switch>

          {/* navigate to home from either path // pass contacts to render in list on home page and functions to edit/remove */}
          <Route exact path={['/', '/contacts']} component={Home} />

          {/* pass function to add new contacts to app state through contact form */}
          <Route path='/contacts/new' component={ContactForm} />

          {/* pass function to edit contacts in app state through edit form */}
          <Route path='/contacts/edit' component={EditForm} />

          {/* navigate to contact details by matching number in url path to contact id */}
          <Route path='/contacts/:id' component={ContactDetail} />

        </Switch>
      </div>
  )
}

export default App
