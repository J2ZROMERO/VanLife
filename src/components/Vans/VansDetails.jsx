import CardDetail from "./CardDetails";
import { useState, useEffect } from "react";
import "../../server";
import { useParams } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";

const VansDetails = () => {
  const [data, setData] = useState({});

  const id = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/vans/${id}`);
      const result = await res.json();
      setData(result.vans);
    };
    fetchData();
  }, []);

  return (
    <>
      {Object.entries(data).length === 0 ? (
        <Container className="w-100 h-100 d-flex justify-content-center align-items-center">
          {" "}
          <Spinner animation="grow" variant="warning" />{" "}
        </Container>
      ) : (
        <CardDetail
          key={data.id}
          id={data.id}
          img={data.imageUrl}
          title={data.name}
          description={data.description}
          type={data.type}
        />
      )}
    </>
  );
};

export default VansDetails;
