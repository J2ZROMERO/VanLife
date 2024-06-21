import { Container, Row } from "react-bootstrap";
import VansHome from "../components/Vans/VansHome";
import Filter from "../components/Nav/Filter";
import { useSearchParams } from "react-router-dom";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Container className="">
        <h1 className="text-center">Vans</h1>
        <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
        <Container className="bg-info">
          <VansHome />
        </Container>
      </Container>
    </>
  );
};

export default Vans;
