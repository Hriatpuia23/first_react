import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {

  const {id} = useParams()
  const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id)
  const history = useNavigate()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/'+blog.id, {
      method: 'DELETE'
    }).then(()=>{
      history('/')
    })
  }

  return (  
    <div className="blog-details">
      { isPending && <div>Loading....</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>By { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;