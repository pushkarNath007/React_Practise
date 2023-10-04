import { useEffect,useState } from "react";
export default function Hook(){
    const [data,setdata]=useState(0);
    useEffect(()=>{
        alert("done");
    },[data])
    function run(){
        setdata(data+1);
    }
    return(
        <div>
            <h1> hello</h1>
            <button type="submit" onClick={run}> update</button>
        </div>
    )
}