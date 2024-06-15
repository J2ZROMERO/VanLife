import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import CardElem from "./Card";
import { Link } from "react-router-dom";

const VansHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/vans");
      const result = await res.json();
      
      setData(result.vans);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <Container className="w-100 d-flex min-vh-75 justify-content-center align-items-center">
          {" "}
          <Spinner animation="grow" variant="warning" />
        </Container>
      ) : (
        data.map((e) => (
          
          <CardElem
            key={e.id}
            id={e.id}
            img={e.imageUrl}
            title={e.name}
            text={e.type}
            price={e.price}
          />
          
        ))
      )}
    </>
  );
};

export default VansHome;
