import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
export default function Main(){
    return(
        <>
        <Navbar/>
        <Outlet/> </>
    )
}