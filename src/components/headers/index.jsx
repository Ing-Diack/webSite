import logo from './../../assets/ABKF_TECH.png'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.development'
import { getUser,getToken , removeUserSession} from '../../utils/context'
function Header() {
  const navigate = useNavigate();

  const handleLogout=(e)=>{
    e.preventDefault();
    removeUserSession();
    navigate('/');
  }
 
  

  return (
   <header>

    <nav className='navbar navbar-expand-md mb-2 navbar-light shadow bg-body  ' >

        <div className="container">
            <Link to="/" className="navbar-brand text-uppercase fw-bold"   >
              <span>
               <img src={logo} alt="" width={40} height={40}/>
               </span>
            </Link>
              <i  type='button' data-bs-toggle='collapse' 
            data-bs-target= "#navbarNav"  aria-controls='navbarNav' aria-expanded='false'
            aria-label= "Toggle Navigation" className=" navbar-toggler fa fab fa-bars fa-1x text-light bg-secondary "></i>
            <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
              <ul className="navbar-nav">
              <li className="nav-item m-md-2">
                  <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item m-md-2">
                 <HashLink to='#section2' className='nav-link  '> Qui suis-je ?</HashLink>
                </li>
                <li className="nav-item m-md-2">
                <HashLink to="#section4" className="nav-link">Mes Projets</HashLink>
                </li>
                <li className="nav-item m-md-2">
                <HashLink to='#section5' className="nav-link">Contact</HashLink>
                </li>
                <li className="nav-item m-md-2"> 
                  {getToken() ? (<Link onClick={handleLogout} className="btn btn-secondary rounded-pill"data-bs-toggle="tooltip" title='LogOut'>
                    <i className="fa fab fa-user" ></i> {getUser().username}
                    </Link> 

                  ):(<Link to='/login' className='nav-link'  > <i className='fa fa-user'></i> Log In </Link> )}   

                </li>
              </ul>
            </div>
        </div>

    </nav>
  
   </header>
  )
}
  
export default Header