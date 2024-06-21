import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const HostSelectedPhotos = () => {
  const { data} = useOutletContext();
  
  return (
    <Container className="mt-4">
      <Image src={data.imageUrl} style={{ width: "15em" }}  roundedCircle  />
    </Container>
  );
};

export default HostSelectedPhotos;
