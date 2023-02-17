import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
function FormSection() {
  return (
    <Container className="FormContainer">
      <Form.Control type="text" placeholder="Job title" />
      <br />
      <Form.Control type="text" placeholder="Location" />
      <br />
      <Form.Select
        aria-label="Default select example"
        className="Location">
        <option>Location Distance</option>
        <option value="1">3 miles</option>
        <option value="2">5 miles</option>
        <option value="3">10 miles</option>
        <option value="4">20 miles</option>
        <option value="5">30 miles</option>
        <option value="6">50 miles</option>
        
      </Form.Select>
      <br />
      <Form.Control type="text" placeholder="Salary" />
      <br />
      <Form.Select
        aria-label="Default select example"
        className="Location"
      >
        <option>Job type</option>
        <option value="1">Permanent</option>
        <option value="2">Temporary</option>
        <option value="3">Contract</option>
        <option value="4">Full-time</option>
        <option value="5">Part-time</option>
      </Form.Select>
      <br />
      <Button className='btnForm' variant="primary">Find jobs</Button>{' '}
    </Container>
  );
}
export default FormSection;