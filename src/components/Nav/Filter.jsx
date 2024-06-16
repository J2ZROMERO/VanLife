import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
function Filter() {
  return (
    <ButtonGroup aria-label="Basic example" className="w-100 mt-3 mb-3">
      <Container className="d-flex justify-content-around w-50">
          <Link to="?type=simple" className="ml-2">
            <Button variant="info">Simple</Button>
          </Link>
        
          <Link to="?type=rugged"  className="ml-2">
            <Button variant="primary">Ruggeg</Button>
          </Link>
        
          <Link  className="ml-2">
            <Button to="?type=luxury" variant="secondary">
              Luxury
            </Button>
          </Link>
          </Container>
          <Container className="text-end">
          <Link  className="ml-2">
            <Button to="" variant="danger">
              Clear Filters
            </Button>
          </Link>
        </Container>
      
    </ButtonGroup>
  );
}

export default Filter;
