import {useNavigate,useSearchParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
export default function About(){
    const navigate=useNavigate();
    const[d1,setd1]=useSearchParams();
    const[name,setname]=useState("");
    const[id,setid]=useState(null);
   
    // setname(d1);
    // setid(d2);
    useEffect(()=>{
        setname(d1.get('name'));
        setid(d1.get("id"));
    })
    return(
        <div>
        <h1>This is about searchparam name={name} id={id} page</h1>
        {/* <h2>{val}:{val2}</h2> */}
        <button onClick={()=>navigate(-1)}> previous page</button></div>
    )
}