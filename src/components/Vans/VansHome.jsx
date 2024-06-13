import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import CardElem from "./Card";

const VansHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/vans");
      const result = await res.json();
      console.log(result.vans);
      setData(result.vans);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <Container className="w-100 h-100 d-flex justify-content-center align-items-center">
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
