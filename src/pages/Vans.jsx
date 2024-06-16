import { Container, Row } from "react-bootstrap";
import VansHome from "../components/Vans/VansHome";
import Filter from "../components/Nav/Filter";
const Vans = () => {
  return (
    <>
      <Container className="">
        <h1 className="text-center">Vans</h1>
      <Filter />
        <Row className="">
          <VansHome />
        </Row>
      </Container>
    </>
  );
};

export default Vans;
