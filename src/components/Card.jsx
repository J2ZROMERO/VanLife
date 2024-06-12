import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardElem = ({ img, title, text, price }) => {
  return (
    <Col className="m-2 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <span>{text}</span> <span>$: {price}</span>{" "}
          </Card.Text>

          <Button className="btn"  variant="primary">Buy me</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardElem;
