import CardDetail from "./CardDetails";
import { useState, useEffect } from "react";
import "../../server";
import { useParams } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchVans } from "../api/Api";
import { useLoaderData } from "react-router-dom";

export function loader({ params}){
  return fetchVans(params.id);
}

const VansDetails = ({ searchParams }) => {
  // const [data, setData] = useState({});

  const data = useLoaderData(); 

  console.log(data)
  
  // // const id = useParams().id;

  // // useEffect(() => {
  // //   const fetchData = async () => {
  // //     const res = await fetch(`/api/vans/${id}`);
  // //     const result = await res.json();
  // //     setData(result.vans);
  // //   };
  // //   fetchData();
  // // }, []);

  return (
    <Container>
      
        <CardDetail
          key={data.id}
          id={data.id}
          img={data.imageUrl}
          title={data.name}
          description={data.description}
          type={data.type}
        />
      
    </Container>
  );
};

export default VansDetails;
