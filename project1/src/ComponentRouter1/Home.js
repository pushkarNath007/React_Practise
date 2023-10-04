// import { useCallback } from 'react'
import {useNavigate,NavLink} from 'react-router-dom'


export default function Home(){
    const navi=useNavigate();
    return(
        <div>
        <h1>This is home page</h1>
        
        <ul id='ull'>
        <li > <NavLink to='/about' className='links' >About us</NavLink></li>
        <li ><NavLink to='about/anil'  className='links'>Anil</NavLink></li>
        <li ><NavLink to='about/Rishab'  className='links'>Rishab</NavLink></li>
        <li><NavLink to='/contact' className='links'>Contact page</NavLink></li> </ul>
        <button onClick={()=>navi('/about')}> about page</button>
        </div>
    )
}