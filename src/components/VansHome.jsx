import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CardElem from "./Card";

const VansHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/vans");
      const result = await res.json();
      console.log(result.vans);
      setData(result.vans);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <Spinner animation="grow" variant="warning" />
      ) : (
        data.map((e, i) => (
          <CardElem key={i} img={e.imageUrl} title={e.name} text={e.type} price={e.price} />
        ))
        
      )}
    </>
  );
};

export default VansHome;
