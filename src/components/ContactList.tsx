import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap'
import '../styles/ContactList.css'
import { Contact, DeleteContact, EditContact, ContactId, ContactName } from "../types/generalTypes";
import { ContactContext } from "../context/ContactContext";

// list of contacts shown on home page
const ContactList: React.FC = (): JSX.Element => {

	const { editContact, contacts, removeContact } = useContext(ContactContext)

	//ask for confirmation before removing contact when user clicks delete link
	const confirmDelete = (contactId: ContactId, contactName: ContactName): void => {
		if (window.confirm(`Are you sure you want to remove ${contactName} from your contacts?`)) {
			removeContact(contactId)
		}
	}

	// display each contact name and link it to contact details, with links also to edit and delete
	const listedContacts = () => {
		if (!!contacts) {
			return contacts.map((contact: any) => {
					return (
						<Row key={contact.id} className="contact">

							{/* Contact Name */}
							<Col className="contact-name" md={5}>
								<Link to={`/contacts/${contact.id}`} className="contact-link">{contact.name} </Link>
								<hr />
							</Col>

							{/* Spacer */}
							<Col className="spacer-col" md={3}>
								<span className="spacer">- - - - - -</span>
								<hr />
							</Col>

							{/* Edit & Remove Links */}
							<Col md={4}>
								<Link to="/contacts/edit"
									  className="edit-link"
									  onClick={event => {
										  //use contact id to edit contact info from app state with passed function
										  editContact(contact.id);
									  }}
								> edit</Link>

								<Link to=""
									  className="delete-link"
									  onClick={event => {
										  //use contact id to delete contact from app state with passed function
										  confirmDelete(contact.id, contact.name);
									  }}> delete</Link>

								<hr />
							</Col>
						</Row>
					)
				});
			} else {
			return (
				<div>
					<p>No contacts found.</p>
				</div>
			)
		}

	}


	return (

		<Container fluid>
			<Row>
				<Col id="contact-list">

					{/* display mapped contact results  */}
					{listedContacts()}

				</Col>
			</Row>
		</Container>

	)
}

export default ContactList;