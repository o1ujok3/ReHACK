import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import TitleContact from "../component/ContactTitle";

function Contact() {
  return (
    <div>
    <TitleContact />
    <Container className="contactContainer">
      <Form className="contactForm">
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control className="mb-4 mt-2" type="name" placeholder="Your Name" />
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Your Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="contactButtonDiv">
        <Button className="contactButton">Send</Button>
        </div>
      </Form>
    </Container>
    </div>
  );
}

export default Contact;
