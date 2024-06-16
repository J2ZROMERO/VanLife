import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const HostSelectedPricing = () => {
  const { details } = useOutletContext();
  return (
    <Container className="mt-4">
      <h6 className="mt-2">
        {" "}
        <strong>Price: </strong>  $ {details.price} 
      </h6>
    </Container>
  );
};

export default HostSelectedPricing;
