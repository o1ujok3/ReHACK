import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import TitleContact from "../component/ContactTitle";
import { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);

  const [ContactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "d574540e-45f0-4a98-a6c0-16b1d6568819",
  });

  const handleChange = (event) => {
    setContactData({
      ...ContactData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(ContactData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setContactData({
          ...ContactData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      });
  };

  return (
    <div>
      <TitleContact />
      <Container className="contactContainer">
        <Form onSubmit={handleSubmit} className="contactForm">
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Control
              className="mb-4 mt-2"
              type="text"
              value={ContactData.name}
              name="name"
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <Form.Control
              className="mb-3 mt-2"
              type="text"
              value={ContactData.email}
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 mt-2"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              value={ContactData.message}
              name="message"
              onChange={handleChange}
              as="textarea"
              rows={3}
              required
            />
          </Form.Group>

          <div className="contactButtonDiv">
            <Button className="contactButton" onClick={handleSubmit}>
              Send
            </Button>
          </div>

          {success && (
            <p className="mb-3 mt-2 success"> Message sent successfully! </p>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
