import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const CardDetail = ({ img, title, description, type }) => {
  const location = useLocation();

  const search = location.state?.search || "all";
  const typeFilter = location.state?.type || "all";

  console.log(typeFilter);

  return (
    <>
      <Link to={`..${search}`} relative="path">
        {" "}
        <Container className="w-100 d-flex align-items-center text-center mt-3">
          <FontAwesomeIcon
            icon={faLeftLong}
            class="fa-solid fa-heart fa-beat mt-0"
          />{" "}
          <h6 className="ms-4">Back to {typeFilter} Vans</h6>
        </Container>
      </Link>

      <Col className="m-2 mt-3 card-details">
        <Card className="host__van__selected" style={{ width: "24rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body className="text-center">
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text className="text-center">{description}</Card.Text>

            <Button className="btn text-center" variant="primary">
              {type}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardDetail;
