import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Form, Col, Button } from 'react-bootstrap'
import '../css/ContactForm.css'

class ContactForm extends Component {

    constructor(props) {
        super(props)

        //to hold data from form input
        this.state = {
            name: '',
            email: '',
            phone: '',
            image: ''
        }

        //bind function to contact form
        this.createContact = this.createContact.bind(this);
    }

    //create new contact and add to contacts array on App state
    createContact() {

        //create random id for new contact
        const generateId = () => Math.round(Math.random() * 100000000)

        //new contact to submit
        const newContact = {
            id: generateId(),
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            image: this.state.image
        }

        //check if all fields have been filled out & id has been generated
        if (newContact.name && newContact.email && newContact.phone && newContact.image && newContact.id) {

            //add input value to contacts in App
            this.props.addNew(newContact);

            //return to home screen
            this.props.history.push('/')

        } else {
            alert("Please fill out all required fields");
        }
    }

    render() {
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
                                value={this.state.name}

                                // updating state on input change
                                onChange={event => {
                                    this.setState({ name: event.target.value })
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
                                value={this.state.email}

                                // updating state on input change
                                onChange={event => {
                                    this.setState({ email: event.target.value })
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
                                value={this.state.phone}

                                // updating state on input change
                                onChange={event => {
                                    this.setState({ phone: event.target.value })
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
                                value={this.state.image}

                                // updating state on input change
                                onChange={event => {
                                    this.setState({ image: event.target.value })
                                }}
                                placeholder="https://pbs.twimg.com/media/EYKjWpyWAAEEBIh.jpg"
                                type="url"
                                required />
                        </Col>
                    </Form.Group>

                    {/* Submit Button */}
                    <Form.Group as={Form.Row}>
                        <Col sm={{ span: 3, offset: 9 }}>

                            <Button className="submit-contact" type="button" onClick={this.createContact}>Add New Contact</Button>

                        </Col>
                    </Form.Group>

                </Form>

                {/* Back Link */}
                <Link className="back-link" to="/contacts">Back</Link>

            </div>
        )
    }
}

//set prop types
ContactForm.propTypes = {
    addNew: PropTypes.func.isRequired,
}

export default ContactForm;

