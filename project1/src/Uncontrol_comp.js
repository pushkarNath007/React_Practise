import { useRef,useState } from "react";
export default function Uncontrol_comp(){
    const[a,seta]=useState("");
    const[b,setb]=useState("");
    const[al,setal]=useState("");
    const func1=useRef(null);
    const func2=useRef(null);
    function run(e){
        console.log(e);
        e.preventDefault();
        seta(func1.current.value);
        setb(func2.current.value);
        setal(document.getElementById("typing").value);
    }   
    return(
         <form onSubmit={run}>
            <h1 style={{backgroundColor:"red"}}>{a}</h1>
            <h2 style={{backgroundColor:"green", border:"2px solid black"}}>{b}</h2>
            <h3 style={{backgroundColor:"green", border:"2px solid black"}}>{al}</h3>
            <input type="text" defaultValue="rishab" ref={func1} ></input>
            <input type="text" defaultValue="hl" ref={func2} ></input>
            <input type="text" id="typing"></input>
            <button> Submit</button>
         </form>
    )
}