import { useEffect, useState } from 'react'
import './App.css'
import MyFunction from './Components'

function App() {

  // const [value1,Setvalue1]=useState(0)
  // const [value2,Setvalue2]=useState(0)
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=100').then((response)=>{return response.json();}).then((data)=>{
      console.log("Fetched data:", data);
      setPosts(data)})
 },[])


  return (
    <>
      {/* <h2>count1:{value1}</h2>
      <button onClick={()=>{Setvalue1(value1+1)}} >Add</button>

      <h2>count2:{value2}</h2>
      <button onClick={()=>{Setvalue2(value2+1)}} >Add</button> */}
      <h2>Fetching Data From API Endpoint</h2>
      <MyFunction posts={posts}/>
    </>
  )
}

export default App
