import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import CardElem from "./Card";
import { Link, useSearchParams } from "react-router-dom";

const VansHome = () => {
  const [data, setData] = useState([]);

const [searchParams, setSearchParams] = useSearchParams();

const typeFilter = searchParams.get("type");


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/vans");
      const result = await res.json();
      setData(result.vans);
    };
    fetchData();
  }, []);


  const handleFilter = typeFilter ? 
  data.filter(e => e.type.toLowerCase() === typeFilter):
  data
    
  return (
    <>
      {data.length === 0 ? (
        <Container className="w-100 d-flex min-vh-75 justify-content-center align-items-center">
          {" "}
          <Spinner animation="grow" variant="warning" />
        </Container>
      ) : (
        handleFilter.map((e) => (
           
          <CardElem
            key={e.id}
            id={e.id}
            img={e.imageUrl}
            title={e.name}
            text={e.type}
            price={e.price}
            searchParams={searchParams}
          />
          
        ))
      )}
    </>
  );
};

export default VansHome;
