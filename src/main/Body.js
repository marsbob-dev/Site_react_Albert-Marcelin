import '../App.css';
import '../Faa.css';
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Carousels from "./Carousels1";
import Cards from "./Cards";
import Table from "./Table";
function Body() {
  return ( <div>
    <Carousels></Carousels>
    <div className="cd">
    <Cards></Cards>
    </div>
    <div>
    <Table></Table>
    </div>
  </div>
    
    
  );
}

export default Body;