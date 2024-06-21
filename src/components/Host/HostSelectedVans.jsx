import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";


const HostSelectedVans = () => {
  const { data } = useOutletContext();

  return (
    <Container className="mt-4">
      <h6 className="mt-2">
        {" "}
        <strong>Name: </strong> {data.name}
      </h6>
      <h6  className="mt-2">
        {" "}
        <strong>Type: </strong>
        {data.type}
      </h6>
      <h6  className="mt-2">
        {" "}
        <strong>Description: </strong> <br />
        {data.description}
      </h6>
      <h6  className="mt-2 mb-2">
        {" "}
        <strong>Visibility: </strong> {data.visibility}
      </h6>
    </Container>
  );
};

export default HostSelectedVans;
