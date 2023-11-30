import './navbar.css'
import {Link, Outlet} from 'react-router-dom'
import {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const[nav, setNav] = useState({display: "none"})
   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <main>
      <div className='nav-container'>
        <svg className='Logo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z"/></svg>
        <ul className='links'>
          <Link to='/'><li className='link'>Home</li> </Link>
          <Link to='/games'><li className='link'>Games</li></Link>
          <Link to='/genres'><li className='link'>Genre</li></Link>
          <Link to='/devs'><li className='link'>Developers</li></Link>
          <Link to='/profile'><li className='link'>Profile</li></Link>
        </ul>
        {(isAuthenticated) ?   <Link reloadDocument to='/profile'><img className='img-small h-hide' src={user.picture} /></Link>  : <button onClick={() => loginWithRedirect()} className='btn-login'>Login</button> }
          <button onClick={() => setNav({display: "flex"})} className='btn-open'>&#9776;</button>
      </div>
      <div style={nav} className='nav-mobile'>
        <h1 onClick={() => setNav({display: "none"})} className='close-btn'>&#10006;</h1>
        <ul>
          <Link to='/'><li className='link'>Home</li> </Link>
          <Link to='/games'><li className='link'>Games</li></Link>
          <Link to='/genres'><li className='link'>Genre</li></Link>
          <Link to='/devs'><li className='link'>Developers</li></Link>
          <Link to='/profile'><li className='link'>Profile</li></Link>
          
        </ul>
        {(isAuthenticated) ? <Link reloadDocument to='/profile'> <img className='img-small m-b' src={user.picture} /></Link> : <button onClick={() => loginWithRedirect()} className='btn-login d-show'>Login</button> }
      </div>


      <Outlet />
    </main>
  )
}
