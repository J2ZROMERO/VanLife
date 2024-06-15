import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";



const CardDetail = ({ id, img, title, description, type }) => {
  

  return (
    <Col className="m-2 mt-3 card-details">
      <Card  className="host__van__selected" style={{ width: "24rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
          <Link to={`/vans/${id}`}>
            <Button className="btn text-center" variant="primary">
              {type}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardDetail;
