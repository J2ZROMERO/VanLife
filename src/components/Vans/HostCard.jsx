

import Card from "react-bootstrap/Card";


const CardElem = ({img, title,  price }) => {

    
  return (
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center">
             $: {price}
          </Card.Text>

        {/* <Link to={`/vans/${id}`}>
          <Button className="btn text-center"  variant="primary">{text}</Button>
          </Link> */}

        </Card.Body>
      </Card>
    
  );
};

export default CardElem;
