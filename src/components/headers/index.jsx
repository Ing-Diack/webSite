import React from 'react'
import logo from './../../assets/ABKF_TECH.png'
import { Link, useNavigate } from 'react-router-dom'
import AuthConsummer from '../../utils/context'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.development'

function Header() {
  const navigate = useNavigate();

    const {authed, logout,userName} = AuthConsummer();
  const handleLogout=(e)=>{
    e.preventDefault();
    logout();
    navigate('/');
  }

  return (
   <header className='mb-5'>
    <nav className='navbar navbar-expand-md  navbar-dark fixed-top fw-bold text-white ' 
       style={{
        backgroundColor:'#4A6373'
      }}>
        <div className="container">
            <Link to="/" className="navbar-brand text-uppercase fw-bold"   >
              <span>
               <img src={logo} alt="" width={40} height={40}/>
               </span>
            </Link>
            <button type='button' className='navbar-toggler bg-danger'  data-bs-toggle='collapse' 
            data-bs-target= "#navbarNav"  aria-controls='navbarNav' aria-expanded='false'
            aria-label= "Toggle Navigation"
            >
              <i className="fa fab fa-bars text-light "></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
              <ul className="navbar-nav">
              <li className="nav-item m-md-2">
                  <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item m-md-2">
                 <HashLink to='#section2' className='nav-link'> Qui suis-je ?</HashLink>
                </li>
                <li className="nav-item m-md-2">
                <HashLink to="#section4" className="nav-link">Mes Projets</HashLink>
                </li>
                <li className="nav-item m-md-2">
                <HashLink to='#section5' className="nav-link">Contact</HashLink>
                </li>
                <li className="nav-item m-md-2"> 
                  {authed ? (
                       <button onClick={handleLogout} type='button' className='btn-sm btn-primary rounded-5 ' data-bs-toggle="tooltip" title='Logout'> 
                        <i className="fa fa-user" data-bs-toggle="tooltip" title='Logout'></i>  {userName}</button>
                  ):(<Link to="/login" className="btn btn-primary rounded-pill">
                    <i className="fa fab fa-user" data-bs-toggle="tooltip" title='Login'></i>
                    </Link> )}
                  
              
                </li>
              </ul>
            </div>
        </div>

    </nav>
  
   </header>
  )
}
  
export default Header