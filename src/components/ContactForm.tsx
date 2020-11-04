import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap'
import '../styles/ContactForm.css'
import { AddContact, Contact } from "../types/generalTypes";
import { ContactContext } from "../context/ContactContext";

const ContactForm: React.FC = (): JSX.Element => {
	//context to update contacts
	const { addContact } = useContext(ContactContext)

	//state - to hold data from form input
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [image, setImage] = useState('');
	const [redirect, setRedirect] = useState(false);

	//create new contact and add to contacts array on App state
	const createContact = (): void => {

		//create random id for new contact
		const generateId = (): number => Math.round(Math.random() * 100000000)

		//new contact to submit
		const newContact: Contact = {
			id: generateId(),
			name,
			email,
			phone,
			image
		}

		//check if all fields have been filled out & id has been generated
		if (name && email && phone && image && newContact.id) {

			//add input value to contacts in App
			addContact(newContact);

			//redirect to home page
			setRedirect(true);
		} else {
			alert("Please fill out all required fields");
		}
	}

	const renderForm = () => {
		if (redirect) {
			return (
				<Redirect to="/" />
			)
		} else {
			return (
				<div className="add-contact-form">
					<header>
						<h1>Add Contact</h1>
					</header>

					<Form>
						{/* Name Input */}
						<Form.Group as={Form.Row} controlId="input-name">
							<Form.Label column sm={3}>Contact Name: </Form.Label>
							<Col sm={9}>

								<Form.Control
									// setting value to that of current state
									value={name}
									// updating state on input change
									onChange={event => {
										setName(event.target.value)
									}}
									placeholder="John Doe"
									type="text"
									required/>
							</Col>
						</Form.Group>

						{/* Email Input */}
						<Form.Group as={Form.Row} controlId="input-name">
							<Form.Label column sm={3}>Email Address: </Form.Label>
							<Col sm={9}>

								<Form.Control
									// setting value to that of current state
									value={email}

									// updating state on input change
									onChange={event => {
										setEmail(event.target.value)
									}}
									placeholder="jdoe@gmail.com"
									type="email"
									required/>
							</Col>
						</Form.Group>

						{/* Phone Number Input */}
						<Form.Group as={Form.Row} controlId="input-name">
							<Form.Label column sm={3}>Phone Number: </Form.Label>
							<Col sm={9}>

								<Form.Control
									// setting value to that of current state
									value={phone}

									// updating state on input change
									onChange={event => {
										setPhone(event.target.value)
									}}
									placeholder="(234) 555-6789"
									type="tel"
									required/>
							</Col>
						</Form.Group>


						{/* Image Url Input */}
						<Form.Group as={Form.Row} controlId="input-name">
							<Form.Label column sm={3}>Image URL: </Form.Label>
							<Col sm={9}>

								<Form.Control
									// setting value to that of current state
									value={image}

									// updating state on input change
									onChange={event => {
										setImage(event.target.value)
									}}
									placeholder="https://pbs.twimg.com/media/EYKjWpyWAAEEBIh.jpg"
									type="url"
									required/>
							</Col>
						</Form.Group>

						{/* Submit Button */}
						<Form.Group as={Form.Row}>
							<Col sm={{ span: 3, offset: 9 }}>

								<Button className="submit-contact" type="button" onClick={createContact}>Add New
									Contact</Button>

							</Col>
						</Form.Group>

					</Form>

					{/* Back Link */}
					<Link className="back-link" to="/contacts">Back</Link>

				</div>
			)

		}
	}

	return (
		renderForm()
	)
}

export default ContactForm;

