export default function Filter(){
    let arr=[
        {name:"pushkar",id:"12",contact:"738367",class:"btech",adress:[{city:"meerut",state:"up"},{city:"jk",state:"jk"}]},
        {name:"rishab",id:"13",contact:"738378",class:"btech",adress:[{city:"meerut",state:"up"},{city:"jk",state:"jk"}]},
        {name:"abhiraj",id:"14",contact:"738360",class:"btech",adress:[{city:"meerut",state:"up"},{city:"jk",state:"jk"}]},
        {name:"aashish",id:"15",contact:"738369",class:"btech",adress:[{city:"meerut",state:"up"},{city:"jk",state:"jk"}]},
    ]
return(
    <div>
       <table id='tab'>
        <thead >
            
            <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Contact</th>
                <th>Class</th>
                <th>address</th>
            </tr>
          
        </thead>
        <tbody>
            
            {
                arr.map((i,list)=>
                // i.class==='btech'?
                <tr key={list}>
                    <td>{i.name}</td>
                    <td>{i.id}</td>
                    <td>{i.contact}</td>
                    <td>{i.class}</td>
                    <td>{i.adress.map((lim)=>
                        <tr>
                            <td>{lim.city}</td>
                            <td>{lim.state}</td>
                        </tr>
                        )
                        }
                    </td>
                </tr> 
                )
            }
            
        </tbody>
       </table>
    </div>
)
}