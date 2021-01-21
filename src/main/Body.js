import '../App.css';
import '../Faa.css';
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Carousels from "./Carousels1";
import Cards from "./Cards";
function Body() {
  return ( <div>
    <Carousels></Carousels>
  
    <div className="cd">
    <Cards></Cards>
    </div>
  </div>
    
    
  );
}

export default Body;