import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Row, Col, Container } from 'react-bootstrap'
import '../css/ContactList.css'


// list of contacts shown on home page
const ContactList = (props) => {

    //ask for confirmation before removing contact when user clicks delete link
    const confirmDelete = (contactId, contactName) => {
        if (window.confirm(`Are you sure you want to remove ${contactName} from your contacts?`)) {
            props.deleteContact(contactId)
        } 
    }

    // display each contact name and link it to contact details, with links also to edit and delete
    const listedContacts = props.contacts.map((contact) => {
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
                            props.editInfo(contact.id);
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

    return (

        <Container fluid>
            <Row>
                <Col id="contact-list">

                    {/* display mapped contact results  */}
                    {listedContacts}

                </Col>
            </Row>
        </Container>

    )
}

//set prop types
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })),

    deleteContact: PropTypes.func.isRequired,

    editInfo: PropTypes.func.isRequired
}

export default ContactList;