export interface Contact {
	id: ContactId;
	name: string;
	email: string;
	phone: string;
	image: string;
}

export type ContactId = number;

export type DeleteContact = (id: number) => void;

export type EditContact = (id: number) => void;

export type AddContact = (contact: Contact) => void;