import React,{useState} from 'react';
export default function Inputdata(){
    const [val,setval]=useState(null);
    const [show,setshow]=useState(false);
    function takedata(data){
        setval(data.target.value.length);
        setshow(data.target.value);
    }
    
    return(
        <div>
            <h1> input data</h1>
            {
                (val>3)? <h1>{show}</h1>:""
            }
            {
                (val<3)? <h1>oops</h1>:""
            }
            <input type="text" placeholder="enter your name" onChange={takedata}></input>
            {/* <input type="password" onChange={}></input> */}
            <br></br>
            <button type="submit">subit here</button>       
            </div>
    )
}