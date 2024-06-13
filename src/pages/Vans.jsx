import { Container, Row } from "react-bootstrap";
import VansHome from "../components/Vans/VansHome";

const Vans = () => {
  return (
    <>
      <Container className="">
        <h1 className="text-center">Vans</h1>

        <Row className="">
          <VansHome />
        </Row>
      </Container>
    </>
  );
};

export default Vans;
