import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorElem = () => {
  const { status, datoExtra } = useRouteError();
  console.log(datoExtra);

  return (
    <Container className="home-container">
      <Container className=" d-flex justify-content-center align-items-center flex-column h-100">
        <h1 className="text-center mt-5 w-100">404</h1>
        <h2 className="text-center mt-5 w-100">
          Page not found <br />
          {datoExtra ? datoExtra : ""}
          <br />
          {status}
        </h2>
        <Link to={".."} path="relative">
          <Button variant="danger" className="mt-5">
            Return to Home.
          </Button>
        </Link>
      </Container>
    </Container>
  );
};
export default ErrorElem;
