import React from 'react';
import './table.css';
export default function Tables(){
    let arr=[
        {name:"pushkar",id:"12",contact:"738367",class:"btech"},
        {name:"rishab",id:"13",contact:"738378",class:"btech"},
        {name:"abhiraj",id:"14",contact:"738360",class:"btech"},
        {name:"aashish",id:"15",contact:"738369",class:"btech"},
    ]
return(
    <div>
       <table id='tab'>
        <thead >
            <div className='tabing'>
            <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Contact</th>
                <th>Class</th>
            </tr>
            </div>
        </thead>
        <tbody>
            <div className='tabing'>
            {
                arr.map((i,list)=>
                <tr key={list}>
                    <td>{i.name}</td>
                    <td>{i.id}</td>
                    <td>{i.contact}</td>
                    <td>{i.class}</td>
                </tr>
                )
            }
            </div>
        </tbody>
       </table>
    </div>
)
}