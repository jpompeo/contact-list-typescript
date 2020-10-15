export interface Contact {
	id: ContactId;
	name: ContactName;
	email: string;
	phone: string;
	image: string;
}

export type ContactId = number;

export type ContactName = string;

export type DeleteContact = (id: number) => void;

export type EditContact = (id: number) => void;

export type AddContact = (contact: Contact) => void;

