import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CardElem from "./Card";
import { useSearchParams } from "react-router-dom";
import { fetchVans } from "../api/Api";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await fetchVans();
  const data = await res;
  return data;
};

const VansHome = () => {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetchVans();
  //     const dat = await res;

  //     setData(dat.vans || []);
  //   };
  //   fetchData();
  // }, []);

  // setData(valueLoader.vans || []);

  const handleFilter = typeFilter
    ? data.filter((e) => e.type.toLowerCase() === typeFilter)
    : data;

  return (
    <Row>
      {
        // data.length === 0 ? (
        //   <Container className="w-100 d-flex min-vh-75 justify-content-center align-items-center">
        //     {" "}
        //     <Spinner animation="grow" variant="warning" />
        //   </Container>
        // ) : (
        handleFilter.map((e) => (
          <CardElem
            key={e.id}
            id={e.id}
            img={e.imageUrl}
            title={e.name}
            text={e.type}
            price={e.price}
            typeF={typeFilter}
            searchParams={searchParams}
          />
          // )
        ))
      }
    </Row>
  );
};

export default VansHome;
