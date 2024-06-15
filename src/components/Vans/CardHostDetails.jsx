import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardHostDeails = ({ id, img, title, text, price }) => {
  return (
    <Col className="m-2 d-flex justify-content-center">
      <Card className="d-flex flex-row card__host__details">
        <Card.Img variant="top" src={img} style={{ width: "15em" }} />
        <Card.Body className="text-center ">
          <Button className="btn text-center mt-5 ml-4" variant="primary">
            {text}
          </Button>

          <Card.Title className="text-center mt-4">{title}</Card.Title>

          <Card.Text className="text-center mt-4">$: {price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardHostDeails;
