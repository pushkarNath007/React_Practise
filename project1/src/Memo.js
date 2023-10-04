import { useMemo,useState } from "react";
import Childmemu from "./Childmemu";

export default function Memo(){
    const [data,setdata]=useState(1);
    const func1=useMemo(function run(){
        console.log("func1 calling");
    },[data])
    const func2=useMemo(function check(){
        console.log("func2 call");
        return <Childmemu/>
    },[data]);
    return(
        <>
        {func1}
        <h1>{data}</h1>
        {func2}
        <button onClick={()=>setdata(data+1)}>change data</button>
        </>
    )
}