import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <Container>
        <h6 className="text-center mt-2 bg-black text-white"> <FontAwesomeIcon className="fa-poo-bolt fa-beat-fade" icon={faGithub} />  J2ZROMERO</h6>
    </Container>
  );
};

export default Footer;
