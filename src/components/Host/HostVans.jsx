import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import HostCard from "./HostCard";
// import { useState, useEffect } from "react";
// import { Spinner } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../api/Api";
import { requireAuth } from "../../utils/Utils";

export async function loader() {
  const res = await requireAuth();
  


  return getHostVans();
}

const HostVans = () => {
  const data = useLoaderData();

  // const [vans, setVans] = useState([])

  // useEffect(() => {
  //     const fetchData = async () => {
  //         const res = await fetch("/api/host/vans");
  //         const result = await res.json();

  //         setVans(result.vans);
  //     };
  //     fetchData();
  // }
  // , []);

  return (
    <Container className="w-100 host-container">
      <h2 className="text-center mt-3">Vans' List</h2>

      <Row className="d-flex">
        {
          //  data.length === 0 ? (
          //   <>
          //     {" "}
          //     <Spinner animation="grow" variant="warning" />
          //   </> ) : (
          data.map((e) => (
            <Col key={e.id} className="m-1 d-flex justify-content-center">
              <Link to={`${e.id}`}>
                <HostCard img={e.imageUrl} title={e.name} price={e.price} />
              </Link>
            </Col>
          ))
          //)
        }
      </Row>
    </Container>
  );
};

export default HostVans;
