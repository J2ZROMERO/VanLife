import {  Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
function Filter({searchParams, setSearchParams}) {


const genNewSP = (key,value) => {

    const sp = new URLSearchParams(searchParams);
         if(value === null){
                sp.delete(key);
            }
            else{
                sp.set(key,value);
            }
            

    return searchParams.toString();
}


  return (
    <ButtonGroup aria-label="Basic example" className="w-100 mt-3 mb-3">
      <Container className="d-flex justify-content-around w-50">
          
            <Button variant="info" 
            onClick={()=> setSearchParams({type: "simple"})}
            >Simple</Button>
          
        
          
            <Button variant="primary"
            onClick={()=> setSearchParams({type: "ruggeg"})}
            >Ruggeg</Button>
          
        
          
            <Button to="?type=luxury" variant="secondary"
            onClick={()=> setSearchParams({type: "luxury"})}
            >
              Luxury
            </Button>
          
          </Container>
          <Container className="text-end">
          
            <Button to="" variant="danger"
            onClick={()=> setSearchParams({type: ""})}
            >
              Clear Filters
            </Button>
          
        </Container>
      
    </ButtonGroup>
  );
}

export default Filter;
