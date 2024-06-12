import { Container, Row, Col, Button } from "react-bootstrap";

const MainHome = () => {
  return (
    <Container className=" flex-grow-1 home-bg h-100 d-flex align-items-start">
      <Row className="d-flex h-75">
        <Col className="col-12 mt-5">
          <h1 className="fs-1 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
            accusamus recusandae dicta.
          </h1>
        </Col>
        <Col className="col-12 mt-3">
          <h5 className="fw-normal text-white">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            soluta perspiciatis sed odio sit, pariatur fugit ulla
          </h5>
        </Col>
        <Col className="col-12 mt-5">
          <Button className="w-100 bg-danger text-white" size="lg"  variant="primary outline-primary">Find Your place!</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHome;
