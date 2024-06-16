import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";


const HostSelectedVans = () => {
  const { details } = useOutletContext();

  return (
    <Container className="mt-4">
      <h6 className="mt-2">
        {" "}
        <strong>Name: </strong> {details.name}
      </h6>
      <h6  className="mt-2">
        {" "}
        <strong>Type: </strong>
        {details.type}
      </h6>
      <h6  className="mt-2">
        {" "}
        <strong>Description: </strong> <br />
        {details.description}
      </h6>
      <h6  className="mt-2 mb-2">
        {" "}
        <strong>Visibility: </strong> {details.visibility}
      </h6>
    </Container>
  );
};

export default HostSelectedVans;
