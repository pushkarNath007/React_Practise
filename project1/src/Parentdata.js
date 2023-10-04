import Childdata from "./Childdata";
import { useState } from "react";
export default function Parentdata(){
    const[val,setval]=useState(10);
    function run(data){
        alert(data);
    }
    function check(){
        console.log("parentcheck");
    }
    return(
        <>
        <h1>Parent:{val}</h1>
        {check()}
        <button onClick={()=>setval(val+10)}> change val</button><br></br>
       <Childdata func={run} /></>
    )

}