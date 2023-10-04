import { useState } from "react"
export default function Childdata(props){
    const [data,setdata]=useState(1);
    function check(){
        console.log("calling");
    }
    return(
        <>
        <h1>{data}</h1>
        {check()}
        <button onClick={()=>{setdata(data+1);props.func(data)}}>clickhere</button>
        </>
    )
}