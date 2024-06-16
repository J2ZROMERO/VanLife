import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const CardDetail = ({ img, title, description, type }) => {
  const location = useLocation();

  
  const search = location.state?.search || ''
  console.log(search);

  return (
    <>
      <Link to={`..${search}`} relative="path">
        {" "}
        <FontAwesomeIcon
          icon={faLeftLong}
          class="fa-solid fa-heart fa-beat"
        />{" "}
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
