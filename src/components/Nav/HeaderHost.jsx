import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

function HeaderHost() {
  return (
    <>
      <Container className="container  d-flex justify-content-center ">
        <Navbar expand="lg" className="bg-body-tertiary  w-100">
          <Container className="container d-flex w-100">
            <Nav className="me-auto d-flex flex-row w-100 justify-content-around ">
              <Nav.Item>
                <Link to={"/host/dashboard"} className="nav-link  text-nav-link">
                  DASHBOARD
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link to={"/host/income"} className="nav-link text-nav-link">
                  INCOME
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"/host/vans"} className="nav-link text-nav-link">
                  VANS
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"/host/review"} className="nav-link text-nav-link">
                  REVIEWS
                </Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </Container>
      <Outlet />
    </>
  );
}

export default HeaderHost;
