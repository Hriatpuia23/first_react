import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  // useEffect hook
  // 1. Abort ngai lo (react versio tharah hi chuan a ngai lo.)
  useEffect(()=>{

    setTimeout(()=>{
      fetch(url)
        .then(res => {
          if(!res.ok){
            throw Error("Could not fetch the data for that resource!!!")
          }
          return res.json();
        })
        .then(data => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
    },1000)

    // fetch('http://localhost:8000/blogs')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     setBlogs(data)
    //     setIsPending(false)
    //   })
  },[url]) // hei hi dependency array add dan array chhunga kan dah kha a in thlak chauhin useEffect hi a in run ang.


  // //2.Abort dah tel dan useEffect Cleanup(Page hrana kal duh a Page pa1 zawka a lo la in run tih tawp dan.)
  // useEffect(()=>{
  //   const abortCont = new AbortController() //cleanup

  //   setTimeout(()=>{
  //     fetch(url, {signal: abortCont.signal}) //cleanup
  //       .then(res => {
  //         if(!res.ok){
  //           throw Error("Could not fetch the data for that resource!!!")
  //         }
  //         return res.json();
  //       })
  //       .then(data => {
  //         setData(data)
  //         setIsPending(false)
  //         setError(null)
  //       })
  //       .catch(err => {
  //         if(err.name === "AbortError"){ // cleanup
  //           console.log("fetch Aborted")
  //         }else{
  //           setIsPending(false)
  //           setError(err.message)
  //         }
  //       })
  //   },1000)

  //   return () => abortCont.abort()  // cleanup 

  // },[url]) 

  return { data, isPending, error }

}

export default useFetch