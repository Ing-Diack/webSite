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
    <nav className='navbar navbar-expand-md  navbar-dark  fw-bold text-white ' 
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
                  {getToken() ? (<Link onClick={handleLogout} className="btn btn-primary rounded-pill"data-bs-toggle="tooltip" title='LogOut'>
                    <i className="fa fab fa-user" ></i> {getUser().username}
                    </Link> 
                  ):(<Link to='/login' className='nav-link border-2 p-2 bg-light text-dark rounded-pill'  >Log In </Link> )}   
                </li>
              </ul>
            </div>
        </div>

    </nav>
  
   </header>
  )
}
  
export default Header