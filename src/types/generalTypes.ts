export interface Contact {
	id: ContactId;
	name: string;
	email: string;
	phone: string;
	image: string;
}

export type ContactId = number;