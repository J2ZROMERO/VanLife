import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";

function HeaderHost() {
  return (
    <>
      <Container className="container  d-flex justify-content-center ">
        <Navbar expand="lg" className="bg-body-tertiary  w-100">
          <Container className="container d-flex w-100">
            <Nav className="me-auto d-flex flex-row w-100 justify-content-around ">
              <Nav.Item>
                <NavLink
                  to={"/host/dashboard"}
                  className={({ isActive }) => (isActive ? "nav-active" : null)}
                  style={{ color: "black", "text-decoration": "none" }}
                >
                  DASHBOARD
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  to={"/host/income"}
                  className={({ isActive }) => (isActive ? "nav-active" : null)}
                  style={{ color: "black", "text-decoration": "none" }}
                >
                  INCOME
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to={"/host/vans"}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "color: black"
                  }
                  style={{ color: "black", "text-decoration": "none" }}
                >
                  VANS
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to={"/host/review"}
                  className={({ isActive }) => (isActive ? "nav-active" : null)}
                  style={{ color: "black", "text-decoration": "none" }}
                >
                  REVIEWS
                </NavLink>
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
