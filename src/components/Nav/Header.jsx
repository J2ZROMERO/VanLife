import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="container-fluid">
          <Navbar.Brand href="#">
            <NavLink to={"/"} className="nav-link">
              VanLife
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-end">
              <Nav.Item>
                <NavLink to={"/"} className="nav-link">
                  HOME
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink to={"/host"} className="nav-link">
                  HOST
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to={"/vans"} className="nav-link">
                  VANS
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to={"/login"} className="nav-link">
                  LOGIN
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
