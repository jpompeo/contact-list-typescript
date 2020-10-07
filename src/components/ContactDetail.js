import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import PropTypes from 'prop-types'
import '../css/ContactDetail.css'
import { Container, Row, Col } from 'react-bootstrap';

const ContactDetail = (props) => {

    //find contact whose id matches id in url
    const contact = _.find(props.contacts, { id: props.contactId });

    //make sure contact was found
    if (!contact) {
        console.log("Could not find contact")
    } else {

        return (
            // Contact Details
            <Container fluid className="contact-detail">
                <Row className="detail-row">

                    {/* Contact Image  */}
                    <Col className="detail-image-col" md={6}>
                        <div className="detail-image">
                            <img src={contact.image} alt={contact.name} />
                        </div>
                    </Col>

                    {/* Contact Info */}
                    <Col className="detail-info" md={6}>
                        <h2>{contact.name}</h2>

                        <p>{contact.email}</p>

                        <p>{contact.phone}</p>
                    </Col>

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
}

//set prop types
ContactDetail.propTypes = {
    contactId: PropTypes.number.isRequired,

    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }))
}

export default ContactDetail;

