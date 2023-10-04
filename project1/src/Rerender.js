import {useState} from 'react';
export default function Rerender(){
    const[data,updatedata]=useState(1);
    const[fix,updatefix]=useState("rishabh");
    const[a,updatea]=useState(10);
    function change(){
        updatea(a+2);
        console.log("change");
    }
    function run(){
        updatedata(data+1);
        console.log("run");
    }
    function updated(){
        return data*5;
        console.log("updated");
    }

    return(
        <div>
            <h1>{a}: Pushkar :{data}</h1>
            {/* <h2>{change()}</h2> */}
            <h3>{updated()}</h3>
            <button onClick={run}>Update after</button>
            <button onClick={change}>update before</button>
        </div>
    )
}