export interface Contact {
	id: ContactId;
	name: ContactName;
	email: string;
	phone: string;
	image: string;
}

export type ContactId = number;

export type ContactName = string;

export type DeleteContact = (id: ContactId) => void;

export type EditContact = (id: ContactId) => void;

export type AddContact = (contact: Contact) => void;

