import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardHostDeails from "./CardHostDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import NavCardHostDetailSelected from "../Nav/NavCardHostDetailSelected";
import { Outlet } from "react-router-dom";

const HostVansDetails = () => {
  const [details, setDetails] = useState([]);


  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/host/vans/${id}`);
      const result = await res.json();
      setDetails(result.vans[0]);
    };
    fetchData();
  }, [id]);

  return (
    <Container className="host-container">
      {/* <Link to={ "/host/vans"} */}
      <Link to={".."} relative="path">
        {" "}
        <FontAwesomeIcon
          icon={faLeftLong}
          class="fa-solid fa-heart fa-beat"
        />{" "}
      </Link>
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

      <NavCardHostDetailSelected />
      <Outlet context={{ details }} />
    </Container>
  );
};

export default HostVansDetails;
