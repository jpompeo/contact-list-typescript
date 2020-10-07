import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
import EditForm from './EditForm';
import _ from 'lodash';
import { defaultContactInfo } from "../data/contact-info";
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      //to hold all data for contact list and details
      contacts: [...defaultContactInfo], // default contacts to display

      //to store information on selected contact for editing
      contactToEdit: {
        id: '',
        name: '',
        email: '',
        phone: '',
        image: ''
      }
    }

    //bind functions to App component
    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  // add new contact to app state with input from contact form 
  addContact = (newContact) => {
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
  }

  //remove targeted contact from app state 
  removeContact = (contactId) => {
    //get current state of contacts from app
    const currentContacts = this.state.contacts;

    //find index of contact to remove
    const index = _.findIndex(currentContacts, (contact) => { return contact.id === contactId; });

    //make sure index was found
    if (index !== -1) {
      //remove contact from array
      currentContacts.splice(index, 1);

      //set state of contacts to new array
      this.setState({ contacts: currentContacts });

    } else {
      console.log('Could not find contact to remove')
    }
  }

  // change state of contactToEdit on App (for edit form to use)
  editContact = (contactId) => {
    //find selected contact in array of contacts in app state
    const clickedContact = _.find(this.state.contacts, (contact) => { return contact.id === contactId; })

    //set as contact to edit on app state
    this.setState({ contactToEdit: clickedContact });
  }

  render() {
    return (
      <div id="app">
        {/* to direct which component to display based on url path */}
        <Switch>

          {/* navigate to home from either path // pass contacts to render in list on home page and functions to edit/remove */}
          <Route exact path={['/', '/contacts']} render={() => (
            <Home contacts={this.state.contacts} deleteContact={this.removeContact} editInfo={this.editContact} />
          )} />

          {/* pass function to add new contacts to app state through contact form */}
          <Route path='/contacts/new' render={(routerProps) => (
            <ContactForm addNew={this.addContact} history={routerProps.history} />
          )} />

          {/* pass function to edit contacts in app state through edit form */}
          <Route path='/contacts/edit' render={(routerProps) => (
            <EditForm deleteContact={this.removeContact} addNew={this.addContact} contact={this.state.contactToEdit} history={routerProps.history} />
          )} />

          {/* navigate to contact details by matching number in url path to contact id */}
          <Route path='/contacts/:id' render={(routerProps) => (
            <ContactDetail contactId={parseInt(routerProps.match.params.id, 10)} contacts={this.state.contacts} />
          )} />

        </Switch>
      </div>
    )
  }
}

export default App
