import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardElem = ({id,img, title, text, price }) => {

    
  return (
    <Col className="m-2 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center">
             $: {price}
          </Card.Text>
        <Link to={`/vans/${id}`}>
          <Button className="btn text-center"  variant="primary">{text}</Button>
          </Link>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardElem;
