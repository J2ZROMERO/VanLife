import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardHostDeails from "../Vans/CardHostDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import NavCardHostDetailSelected from "../Nav/NavCardHostDetailSelected";
import { Outlet } from "react-router-dom";
import { getHostVans } from "../api/Api";
import { useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils/Utils";

export async function loader({ params }) {
  const res = await requireAuth();
  
  return getHostVans(params.id);
}

const HostVansDetails = () => {
  // const [details, setDetails] = useState([]);

  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`/api/host/vans/${id}`);
  //     const result = await res.json();
  //     setDetails(result.vans[0]);
  //   };
  //   fetchData();
  // }, [id]);

  const data = useLoaderData()[0];

  console.log(data);

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
      {/* {details && (
      )} */}
      <CardHostDeails
        key={data.id}
        id={data.id}
        img={data.imageUrl}
        title={data.name}
        text={data.type}
        price={data.price}
      />

      <NavCardHostDetailSelected />
      <Outlet context={{ data }} />
    </Container>
  );
};

export default HostVansDetails;
