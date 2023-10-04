import {useNavigate} from 'react-router-dom'
export default function Other(){
    const navigate=useNavigate();
    return(
        <div>
        <h1>This is Other page</h1>
        {/* <h2>{val}:{val2}</h2> */}
        <button onClick={()=>navigate(-1)}> previous page</button></div>
    )
}