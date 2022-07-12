
import { Link } from "react-router-dom";

//hei hi arrow function a nia function pangai pawh khan a tih theih..
const Navbar = () => { //sfc = stateless functional component
  return (  
    <div className="navbar">
      <h1>Hpa Blog</h1>
      <div className="links">
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>

        {/* Inline Css apply dan */}
        <Link to="/create" style={{
          color:"white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </div>
  );
}
 
export default Navbar;