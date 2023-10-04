import { useState } from "react";
export default function State(props){
    const [name,updatename]=useState("rishabh");
     function all(){
        updatename("pushkar");
       alert(name);
    }
    console.warn(props);
    return (
        <div>
            <h2>{props.obj.name}</h2>
            <h3>{props.arr[0].age}</h3>
            <h1> hello :{name}</h1>
            <button onClick={all}> change name</button>
            
        </div>
    )
}