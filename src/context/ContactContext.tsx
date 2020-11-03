import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { AddContact, Contact, ContactId, DeleteContact, EditContact } from '../types/generalTypes';
import { defaultContactInfo } from "../data/contact-info";
import _ from "lodash";

type ContactContextType = {
	contacts: Contact[] | null;
	addContact: (contact: Contact) => void;
	removeContact: (contactId: ContactId) => void;
	editContact: (contactId: ContactId) => void;
	currentContact: Contact | null;
};

export const ContactContext = createContext<ContactContextType>({
	contacts: [],
	addContact: () => {},
	removeContact: () => {},
	editContact: () => {},
	currentContact: null
});

export default function ContactContextProvider({ children }: { children: ReactNode }) {
	const [contacts, setContacts] = useState<Contact[] | []>(defaultContactInfo);
	const [currentContact, setCurrentContact] = useState<Contact | null>(null);

	// add new contact to app state with input from contact form
	const addContact: AddContact = (newContact) =>  {
		setContacts(oldContacts => { return [...oldContacts, newContact] });
	}

	//remove targeted contact from app state
	const removeContact: DeleteContact = (contactId)=>  {
		//get current state of contacts from app
		const currentContacts = [...contacts];

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
		clickedContact ? setCurrentContact(clickedContact) : alert("Could not find contact to edit");
	}

	return (
		<ContactContext.Provider
			value={{
				contacts,
				addContact,
				removeContact,
				editContact,
				currentContact
			}}
		>
			{children}
		</ContactContext.Provider>
	);
}
