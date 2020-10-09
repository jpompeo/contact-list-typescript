import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Form, Col, Button } from 'react-bootstrap'
import '../css/EditForm.css'

const EditForm = (props) => {

    //state to hold data from form input
    const [name, setName] = useState(props.contact.name);
    const [email, setEmail] = useState(props.contact.email);
    const [phone, setPhone] = useState(props.contact.phone);
    const [image, setImage] = useState(props.contact.image);

    //save edits as new contact and replace previous "version" of contact in contacts array on App state
    const saveContact = () => {
        //create new random id for edited contact
        const generateId = () => Math.round(Math.random() * 100000000)

        //new contact info to submit
        const editedContact = {
            id: generateId(),
            name,
            email,
            phone,
            image
        }

        //check if all fields have been filled out & id has been generated
        if (name && email && phone && image && editedContact.id) {

            //remove previous version of contact from app state
            props.deleteContact(props.contact.id)

            //add input value to contacts in App
            props.addNew(editedContact);

            //return to home screen
            props.history.push('/')

        } else {
            alert("Please fill out all required fields");
        }
    }

        return (
            <div className="edit-contact-form">
                <header>
                    <h1>Edit Contact Information</h1>
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
                                required />
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
                                required />
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
                                required />
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
                                placeholder="https://www.website.com/contact_image.jpg"
                                type="url"
                                required />
                        </Col>
                    </Form.Group>

                    {/* Submit Button */}
                    <Form.Group as={Form.Row}>
                        <Col sm={{ span: 3, offset: 9 }}>

                            <Button className="submit-contact" type="button" onClick={saveContact}>Save Changes</Button>

                        </Col>
                    </Form.Group>
                </Form>

                {/* Back Link */}
                <Link className="back-link" to="/contacts">Back</Link>
            </div>
        )
}

//set prop types
EditForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })),
    addNew: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default EditForm;

