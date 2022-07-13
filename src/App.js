import './index.css'


// Part 1 (One Component)
// function App() {
//   const title = 'Hpa Restarted'
//   const likes = 50;

//   // hetah hi chuan boolean leh object a read thei lo
//   // const person = {name: 'hpa', age: 30} // this is object
//   const link = "http://www.google.com/about"

//   return (
//     <div className="App">
//       <div className="content">
        
//         <h1>{title}</h1> {/* dynamic data siam dan */}
//         <p>Liked {likes}</p>

//         <p>10</p>
//         <p>{10}</p>
//         <p>{"Hello, Hpa"}</p>
//         <p>{Math.random()*2}</p>

//         <a href={link} target="_blank" rel="noreferrer">Google</a>


//       </div>
//     </div>
//   )
// }


//Part 2 (Multiple Component)
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'   //Router hman dawn chuan
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App(){
  return (
     <Router>   {/* Router */} 
        <div className="App">
          <Navbar/>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path='/blogs/:id' element={<BlogDetails/>}/> {/* hei hi id thlak theih a dah dan a ni. */}
                <Route path='*' element={<NotFound/>}/>
              </Routes>
            </div>
        </div>
    </Router>
  )
}

export default App
