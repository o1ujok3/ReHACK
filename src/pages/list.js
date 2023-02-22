import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSterlingSign,
  faBriefcase,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useJobList from "../context/jobList";

function List() {
  const { data } = useJobList();


  

  return (
    <div>
      <Container>
        {data.map((item, index) => {
            const salary = Math.floor(item.salary_min).toLocaleString('en-US', {minimumFractionDigits: 0});

            const contractType = item.contract_type;
            const contractTime = item.contract_time;
            

          return (
            <Card className="listCard" key={index}>
              <Card.Body>
                <Card.Title className="cardTitle mb-3">
                  <h2>{item.title}</h2>
                </Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  {item.company.display_name}
                </Card.Subtitle>
                <div className="cardTextIcons">
                  <Card.Text className="cardTextInfo">
                    <FontAwesomeIcon size="1x" icon={faSterlingSign} />
                    <p>{salary} per annum</p>
                  </Card.Text>
                  {(contractType || contractTime) && (
                    <Card.Text className="cardTextInfo">
                      <FontAwesomeIcon size="1x" icon={faBriefcase} />
                      <p>{contractType ? contractType : contractTime}</p>
                    </Card.Text>
                  )}
                  <Card.Text className="cardTextInfo">
                    <FontAwesomeIcon size="1x" icon={faLocationDot} />
                    <p>{item.location.display_name}</p>
                  </Card.Text>
                </div>
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>See more</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="cardButtonSection">
                  <Button className="cardButton" target="_blank" href={item.redirect_url}>
                    Apply now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

// title, created, company, salary_min, contract_type, location, description, link

export default List;
