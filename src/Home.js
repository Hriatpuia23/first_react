// import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import useFetch from "./usefetch"

const Home = () => { //sfc = stateless functional component
  
// Part 1 (without useState Hook)
  // let name = 'lil tunechi'

  // const handleClick = () => {
  //   name = 'hpa'
  //   console.log(name)
  // }

  // // const handleClickAgain = (name,e) => {
  // //   console.log('hello '+name, e.target)
  // // }
  
  // return (  
  //   <div className="home">
  //     <h2>HomePage</h2>
  //     <h5>Hpa Restarted</h5>
  //     <br/>
  //     <br/>

  //     <p>{ name }</p>
  //     <button onClick={handleClick}>Click me</button>
  //     {/* <button onClick={(e)=>handleClickAgain("hpa",e)}>Click me again</button> */}
  //   </div>
  // );












  // //Part 2 (Using useState Hook)

  // const [name, setName] = useState("hpa")
  // const [age, setAge] = useState(27)

  // const handleClick = () => {
  //   setName("Lil Tunechi")
  //   setAge(39)
  // }


  // return (
  //   <div className="home">
  //     <h2>HomePage</h2>

  //     <p>{name} is { age } years old</p>
  //     <button onClick={handleClick}>Click me</button>
  //   </div>
  // )

  










  // // Part 3 (Outputting Lists)(useState Hook tho kha kan hmang ang)
  // const [blogs, setBlogs] = useState([
  //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ])

  // return (
  //   <div className="home">
  //     {blogs.map((blog)=>(
  //       <div className="blog-preview" key={blog.id}>
  //         <h2>{blog.title}</h2>
  //         <p>{blog.body}</p>
  //         <p>by {blog.author}</p>
  //       </div>
  //     ))}
  //   </div>
  // )













  // Part 4 (Props) Props hmanga list show dan List Structure kan reuse zung zung theih nan
    //a) Data Declare sa a tih dan 
    // const [blogs, setBlogs] = useState([
    //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ])

    // b) json server a mi hman dan
    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)
  
  
  
  
  
  
  
    // function pass dan telin
  // const handleDelete = (id) => {
  //   const newBlog = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlog)
  // }






  
  // // useEffect hook
  // useEffect(()=>{

  //   setTimeout(()=>{
  //     fetch('http://localhost:8000/blogs')
  //       .then(res => {
  //         if(!res.ok){
  //           throw Error("Could not fetch the data for that resource!!!")
  //         }
  //         return res.json();
  //       })
  //       .then(data => {
  //         setBlogs(data)
  //         setIsPending(false)
  //         setError(null)
  //       })
  //       .catch(err => {
  //         setIsPending(false)
  //         setError(err.message)
  //       })
  //   },1000)

  //   // fetch('http://localhost:8000/blogs')
  //   //   .then(res => {
  //   //     return res.json();
  //   //   })
  //   //   .then(data => {
  //   //     setBlogs(data)
  //   //     setIsPending(false)
  //   //   })
  // },[]) // hei hi dependency array add dan array chhunga kan dah kha a in thlak chauhin useEffect hi a in run ang.






  // Custom Hook kan import ang
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')


  return (
    <div className="home">
      {/* {blogs &&  <BlogList blogs = {blogs} title="All Blogs" handleDelete = {handleDelete}/>} */}

      {/* Loading and Error notification show telin  */}
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}

      {/* Delete Function Tel lovin */}
      {blogs &&  <BlogList blogs = {blogs} title="All Blogs"/>}
      
      {/* Reusing Component */}
      {blogs && <BlogList blogs = {blogs.filter((blog)=> blog.author === "mario")} title = "By Mario's" />}
    </div>
  )

}

export default Home