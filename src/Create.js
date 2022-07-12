import {useState} from "react"
import {useNavigate} from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('lil')
  const [isPending, setIsPending] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault() //hei hian submit hmeha page in refresh tur a veng
    const blog = {title, body, author}
    console.log(blog)
    
    setIsPending(true)

    setTimeout(()=>{
      fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(blog)
      }).then(()=>{
        setIsPending(false)
        console.log("New Blog added")
        // navigate(-1)
        navigate("/")
      })
    },500)

  }

  return (  
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(v)=>setBody(v.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select
        value = {author}
        onChange = {(e)=>setAuthor(e.target.value)}
        >
          <option value="hpa">hpa</option>
          <option value="lil">lil</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}

        <p>{title + " "+body+" "+author}</p>
      </form>
    </div>
  );
}
 
export default Create;