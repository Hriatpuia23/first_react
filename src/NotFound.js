import { Link } from "react-router-dom";

const NotFound = () => {
  
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That Page cannot be Found</p>
      <Link to="/first_react">Back to the HomePage..</Link>
    </div>
   );
}
 
export default NotFound;