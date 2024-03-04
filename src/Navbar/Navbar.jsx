import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link, useHref, useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/images/logo-sm.png'
export default function Navbar() {

  
  let href = useHref()




let userToken = localStorage.getItem('userToken')

  let navigate =  useNavigate()


  function logOut(){
    toast.success('Bye', {
      icon:'😭'
    })
    localStorage.removeItem('userToken')
    navigate('/login')
    
  }


  return <>
  
<nav className="navbar navbar-expand-lg bg-dark text-white navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>
      <img src={logo} className='w-25' alt="Game over logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-3 mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={href === '/' ? "nav-link blue-clr" : "nav-link"} to={'/'}>MMORPG</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/shooter' ? "nav-link blue-clr" : "nav-link"} to={'/shooter'}>SHOOTER</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/saling' ? "nav-link blue-clr" : "nav-link"} to={'/saling'}>SAILING</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/permadeath' ? "nav-link blue-clr" : "nav-link"} to={'/permadeath'}>PERMADEATH</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/superhero' ? "nav-link blue-clr" : "nav-link"} to={'/superhero'}>SUPERHERO</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/pixel' ? "nav-link blue-clr" : "nav-link"} to={'/pixel'}>PIXEL</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/pvp' ? "nav-link blue-clr" : "nav-link"} to={'/pvp'}>PVP</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/action' ? "nav-link blue-clr" : "nav-link"} to={'/action'}>ACTION</Link>
        </li>
      </ul>
     {userToken ?  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-end">
     <li className="nav-item">
          <p className='fw-bold pt-3'>{localStorage.getItem('userFname') + localStorage.getItem('userLname') }</p>
        </li>
      <li className="nav-item fw-bold">
        <button className='btn text-white' onClick={logOut}><button class="Btn">
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text">Logout</div>
</button>


</button>
        </li>
      </ul> :   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className={href === '/login' ? "nav-link blue-clr" : "nav-link"} to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className={href === '/register' ? "nav-link blue-clr" : "nav-link"} to={'/register'}>Register</Link>
        </li>

      </ul>
        }
    </div>
  </div>
</nav>

  
  </>
}
