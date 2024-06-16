import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";



function Filter({ searchParams, setSearchParams }) {

const typeFilter = searchParams.get("type");  


  const handleFilter = (key, value) => {
    setSearchParams((preParams) => {
      if (value === null) {
        preParams.delete(key);
      } else {
        preParams.set(key, value);
      }

      return preParams;
    });
  };


  return (
    <ButtonGroup aria-label="Basic example" className="w-100 mt-3 mb-3">
      <Container className="d-flex justify-content-around w-50">


        <Button variant="light"
         onClick={() => handleFilter("type", "simple")}
         className={`${typeFilter === "simple" ? "bg-info" : ""}`}
         >
          Simple
        </Button>

        <Button
          variant="light"
          onClick={() => handleFilter("type", "rugged")}
          className={`${typeFilter === "rugged" ? "bg-info" : ""}`}
        >
          Ruggeg
        </Button>

        <Button
          
          variant="light"
          onClick={() => handleFilter("type", "luxury")}
          className={`${typeFilter === "luxury" ? "bg-info" : ""}`}
        >
          Luxury
        </Button>
      </Container>
      <Container className="text-end">
        
        { typeFilter && <Button 
        
        variant="danger"
         onClick={() => handleFilter("type", null)}>
          Clear Filters
        </Button>}
        


      </Container>
    </ButtonGroup>
  );
}

export default Filter;
