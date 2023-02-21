import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function FormSection({ formData, handleChange, handleClick }) {
  return (
    <Container className="FormContainer">
      <Form.Control
        value={formData.title}
        name="title"
        type="text"
        placeholder="Job title"
        onChange={handleChange}
      />
      <br />
      <Form.Control
        value={formData.location}
        name="location"
        type="text"
        placeholder="Location"
        onChange={handleChange}
      />
      <br />
      <Form.Select
        aria-label="Default select example"
        name="distance"
        value={formData.distance}
        className="Location"
        onChange={handleChange}
      >
        <option>Location Distance</option>
        <option value="1">3 miles</option>
        <option value="2">5 miles</option>
        <option value="3">10 miles</option>
        <option value="4">20 miles</option>
        <option value="5">30 miles</option>
        <option value="6">50 miles</option>
      </Form.Select>
      <br />
      <Form.Control
        value={formData.salary}
        name="salary"
        type="text"
        placeholder="Salary"
        onChange={handleChange}
      />
      <br />
      <div className="formButton">
        <button
          className="link findJobButton btnForm"
          type="button"
          onClick={handleClick}
        >
          Find jobs
        </button>
      </div>
    </Container>
  );
}
export default FormSection;
