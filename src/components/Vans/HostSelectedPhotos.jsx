import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const HostSelectedPhotos = () => {
  const { details } = useOutletContext();
  console.log(details.imageUrl)
  return (
    <Container className="mt-4">
      <Image src={details.imageUrl} style={{ width: "15em" }}  roundedCircle  />
    </Container>
  );
};

export default HostSelectedPhotos;
