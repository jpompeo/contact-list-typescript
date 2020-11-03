import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Contact } from '../types/generalTypes';
import { defaultContactInfo } from "../data/contact-info";

type ContactContextType = {
	contacts: Contact[] | null;
	setContacts: (contacts: Contact[]) => void;
	currentContact: Contact | null;
	setCurrentContact: (contact: Contact | null) => void;
};

export const ContactContext = createContext<ContactContextType>({
	contacts: null,
	setContacts: () => {},
	currentContact: null,
	setCurrentContact: () => {},
});

export default function ContactContextProvider({ children }: { children: ReactNode }) {
	const [contacts, setContacts] = useState<Contact[] | null>(defaultContactInfo);
	const [currentContact, setCurrentContact] = useState<Contact | null>(null);
	
	return (
		<ContactContext.Provider
			value={{
				contacts,
				setContacts,
				currentContact,
				setCurrentContact
			}}
		>
			{children}
		</ContactContext.Provider>
	);
}
