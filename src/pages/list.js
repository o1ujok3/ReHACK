import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

function List() {
  return (
    <div>
      <Container>
        <Card className="listCard">
          <Card.Body>
            <Card.Title className="cardTitle mb-3">
                <h2>title</h2></Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              created by company.display_name
            </Card.Subtitle>
            <Card.Text>£ salary_min</Card.Text>
            <Card.Text>contract_type</Card.Text>
            <Card.Text>
              location.display_name
            </Card.Text>
            <Accordion className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>See more</Accordion.Header>
                <Accordion.Body>
                  description
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button className="cardButton" href="#">Apply now</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

// title, created, company, salary_min, contract_type, location, description, link

export default List;
