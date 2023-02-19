import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import TitleContact from "../component/ContactTitle";
import { useState } from "react";

function Contact() {

    const [ContactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        setContactData({
            ...ContactData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(ContactData);

    };

    return (
        <div>
            <TitleContact />
            <Container className="contactContainer">
                <Form onSubmit={handleSubmit}
                    className="contactForm">
                    <Form.Group
                        className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            className="mb-4 mt-2"
                            name="name"
                            onChange={handleChange}
                            type="text"
                            placeholder="Your Name" />
                        <Form.Control className="mb-3"
                            name="email"
                            onChange={handleChange}
                            type="text"
                            placeholder="Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                            name="message"
                            onChange={handleChange}
                            as="textarea" rows={3} />
                    </Form.Group>

                    <div className="contactButtonDiv">
                        <Button className="contactButton"
                        onClick={handleSubmit}>Send</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Contact;
