import React from 'react';
export default function Toggle(){
    const [data,setdata]=React.useState(null);
    const [hide,sethide]=React.useState(true);

    return(
        <div>
           
            <input type="text" placeholder="your name"
            onChange={(a)=>{
                setdata(a.target.value);
            }}></input>
            {
                hide? <div> your name please :{data}</div>:""
            }
            <button type="submit" onClick={()=>{sethide(!hide)}}>toggle</button>
        </div>
    )
}