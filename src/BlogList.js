// const BlogList = (props) => { //props hmang lo pawh hian a declare nghal tawp theih bawk
  // const blogs = props.blogs
  // const title = props.title

import { Link } from "react-router-dom";

// const BlogList = ({blogs,title,handleDelete}) => {    //Delete function a tel

const BlogList = ({blogs, title}) => {

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            {/* <p>{blog.body}</p> */}
            <p>by {blog.author}</p>  
          </Link>
        
      {/* <button onClick={()=> handleDelete(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
)
}
 
export default BlogList;