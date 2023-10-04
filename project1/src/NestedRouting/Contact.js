import { Outlet, useNavigate } from "react-router-dom"
export default function Contact(){
    const navi1=useNavigate();
    const navi2=useNavigate();
    return(
        <>
        <button onClick={()=>navi1('/contact/Anil')}>Anil page</button>
        <button onClick={()=>navi2('/contact/Rishab')}>Rishab page</button>
        <Outlet/>
        </>
    )
}