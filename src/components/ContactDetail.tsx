import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import '../styles/ContactDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Contact, ContactId } from "../types/generalTypes";
import { ContactContext } from "../context/ContactContext";

interface ContactDetailProps {
	contacts: Contact[];
	contactId: ContactId;
}

const ContactDetail: React.FC<ContactDetailProps> = ({contacts, contactId}): JSX.Element => {
	const { currentContact } = useContext(ContactContext);

	//get selected contact
	const contact = currentContact;

	const renderContact = (): JSX.Element => {
		//make sure current contact was set
		if (!contact) {
			return (
				<Col>
					<p>"Could not find contact"</p>
				</Col>
			)
		} else {
			return (
				<>
					{/* Contact Image  */}
					<Col className="detail-image-col" md={6}>
						<div className="detail-image">
							<img src={contact.image} alt={contact.name}/>
						</div>
					</Col>

					{/* Contact Info */}
					<Col className="detail-info" md={6}>
						<h2>{contact.name}</h2>

						<p>{contact.email}</p>

						<p>{contact.phone}</p>
					</Col>
				</>
			)
		}
	}

		return (
			// Contact Details
			<Container fluid className="contact-detail">
				<Row className="detail-row">
					{renderContact()}
				</Row>

				{/* Back Link  */}
				<Row>
					<Col>
						<Link className="back-link" to="/contacts">Back</Link>
					</Col>
				</Row>
			</Container>
		)
}

export default ContactDetail;

