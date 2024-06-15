import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardHostDeails from "./CardHostDetails";

const HostVansDetails = () => {
  const [details, setDetails] = useState([]);


  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/host/vans/${id}`);
      const result = await res.json();
      setDetails(result.vans[0]);

      console.log(result.vans[0], "asdadsas");
    };
    fetchData();
  }, [id]);

  return (
    <Container className="host-container">
      <Link to={"/host/vans"}> --- Go back </Link>
      {details && (
        <CardHostDeails
          key={details.id}
          id={details.id}
          img={details.imageUrl}
          title={details.name}
          text={details.type}
          price={details.price}
        />
      )}
    </Container>
  );
};

export default HostVansDetails;
