import { NavLink } from "react-router-dom"
export default function Navbar(){
    return(
        <ul>
            <li><NavLink className="Linking"  to={'/home'}>Home</NavLink></li>
            <li><NavLink className="Linking" to='/about'>About</NavLink></li>
            <li><NavLink className="Linking" to={'/contact'}>Contact</NavLink></li>
            <li><NavLink className="Linking" to={'/other'}>other</NavLink></li>
        </ul>
    )
}