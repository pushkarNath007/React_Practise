import {useState,useMemo}  from 'react';
import BasicClass from './BasicClass';
export default function Fpure(){
    const[data,setdata]=useState(0);
    const func=useMemo(()=>{
        return <BasicClass/>
    },[data])
    return(
        <>
        {func}
        </>
    )
}