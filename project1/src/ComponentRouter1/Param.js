import {useParams} from 'react-router-dom'
// import { useState } from 'react'
export default function Param(){
    
    // const [da,setdata]=useState("");
    const {name}=useParams()
    // console.log(da);
    return(
        
        <h1> This is {name} file</h1>
    )
}