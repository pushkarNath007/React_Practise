import React, { useEffect,useState } from 'react'

function Main() {
  const [data,setdata]=useState([]);
  // const d2="";
  useEffect( ()=>{
    fetch("http://localhost:5000/pushkarnath").then((li)=>{
      li.json().then((i)=>{
        setdata(i);
      })
    })
  },[])
 
    
  return (
    <>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Head</th></tr>
        </thead>
        <tbody>
         {
          data.map((i)=>
          <tr>
            <td>{i.name}</td>
            <td>{i.price}</td>
            <td>{i.age}</td>
          </tr>
          
          )

         }
        </tbody>
      </table>
    </>
  )
}

export default Main;