import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../styles/Home.css'
import { Contact, DeleteContact, EditContact } from "../types/generalTypes";

const Home: React.FC = (): JSX.Element => {

	return (
		<Container fluid id="home-page">
			{/* Header */}
			<Row>
				<Col md={{ span: 4, offset: 1 }}>
					<h1>Contacts</h1>
				</Col>

				{/* Button to add new contacts */}
				<Col id="add-contact-link" md={4}>
					{/* direct to contact form on click */}
					<Link to="/contacts/new">
						<Button id="add-contact-button" type="button">Add Contact</Button>
					</Link>
				</Col>
			</Row>

			<hr/>

			{/* Full list of contacts */}
			<Row>
				<Col>
					<ContactList/>
				</Col>
			</Row>

		</Container>
	)
}

export default Home;

