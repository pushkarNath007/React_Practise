import { useState } from "react";
export default function Basic_form(){
    const[box,setbox]=useState(null);
    return (
        <div>
        <form onSubmit={(f)=>{
            alert("submitted");
            f.preventDefault();    
        }}>
            <label for="name"></label>
            <input type="text" id="name" placeholder="enter your name"></input> <br></br>
            <label htmlFor="car"> choose :</label>
            <select id="car" >
                <option> hyundai</option>
                <option> alto</option>
                <option> ferrari</option>
                <option> lamborgini</option>   
            </select><br></br>
            <input type="checkbox" onChange={(a)=>{setbox(a.target.checked)}}></input><span> i accept all terms and condition</span><br></br>
            <header>{box}</header>
            {console.warn(box)}
         <button > submit here</button>
        </form><br></br></div>
    )
}