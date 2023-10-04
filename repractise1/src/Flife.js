import {useEffect,useState} from 'react';
export default function Flife(){
    const[data,setdata]=useState(0);
    useEffect(()=>{
        console.log("useEffect");
    },[])
    return(
        <>
        <h1>{data}</h1>
        <button type='submit' onClick={()=>setdata(data+1)}>update</button>
        </>
    )
}