import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";
const NavCardHostDetailSelected = () => {





  return (
    <>
      <Container className="container  d-flex justify-content-center ">
        <Navbar expand="lg" className="bg-body-tertiary  w-100">
          <Container className="container d-flex w-100">
            <Nav className="me-auto d-flex flex-row w-100 justify-content-around ">
              <Nav.Item>
                <NavLink
                  to={"details"}
                  end
                  

                  className={({ isActive }) => (isActive ? "nav-active" : null)}
                  style={{ color: "black", "text-decoration": "none" }}
                >
                  Details 
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to={"pricing"}

                  end
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "color: black"
                  }
                  style={{ color: "black", "text-decoration": "none" }}
                >
                  Pricing
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to={"photos"}
                  end
                  className={({ isActive }) => (isActive ? "nav-active" : null)}
                  style={{ color: "black", "text-decoration": "none" }}
                >
                  Photos
                </NavLink>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </Container>
      
    </>
  );
};

export default NavCardHostDetailSelected;
