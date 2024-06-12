import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="container-fluid">
          <Navbar.Brand href="#">
            <Link to={"/"} className="nav-link">
              VanLife
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-end">
              <Nav.Item>
                <Link to={"/"} className="nav-link">
                  HOME
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link to={"/vans"} className="nav-link">
                  VANS
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
