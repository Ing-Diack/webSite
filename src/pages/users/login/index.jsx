import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { setUserSession } from '../../../utils/context'
import { Loader } from '../../../utils/css/atom'





function Login() {
    const navigate =useNavigate();
    const [isLoading,setIsLoading] = useState(false);
    const [boxMessage, setBoxMessage]=useState('');
    const [typeMessage, setTypeMessage] = useState('');
    const [userThing , setUserThing]= useState({
        email:'',
        password:''
    });
    const resetForm = ()=>{
        setUserThing({
            email:'',
            password:''
         });}
    
    const  handleLogin =(e)=>{
        e.preventDefault();
        setIsLoading(true);
        axios.post('https://server-codebrah.onrender.com/api/auth/login', userThing)
        .then(res=>{
           console.log(res.data);
           setIsLoading(false);
            setUserSession(res.data.token,res.data.user);
                navigate("/");  
                })
        .catch(error=>{
            setIsLoading(false);
            setBoxMessage(error.response.data.message);
                setTypeMessage('danger');
             });
             resetForm();
    }

    const onChange =(e)=>{
        setUserThing({
            ...userThing,
           [ e.target.name] : e.target.value
        })}
  
  return (
        <main className=' py-5'>
            <section>
                <div className="container">
                    <div className="row  align-items-center justify-content-center h-100">
                        <div className="col-10  col-md-4 p-5  bg-light rounded-3">
                        <form action="" onSubmit={handleLogin}>
            <div className={`alert alert-${typeMessage} text-center fs-6 py-1 py-md-2` } role="alert">
            <i className="fa-regular fab fa-triangle-exclamation"></i>
                {boxMessage}
                </div>
            
                    <div> <Link to="/"  className='text-start'> <i className="fa fab fa-arrow-left m-1"></i>Home</Link></div>
                    <div><h3 className='text-center'>Connexion</h3>
                            
                    </div>
             
                    <div className=" mt-4 border-bottom">

                        <label htmlFor="email" className='form-label'> <span className="fst-italic">E-mail*</span></label>

                    <input  className='form-control' type="email" id='email' name='email' placeholder='email' required
                    value={userThing.email}
                    onChange={onChange}
                    />
                
                </div>
                <div className="mt-4 border-bottom">
                <label htmlFor="password" className='form-label'> <span className='fst-italic'>Password*</span> </label>
                    <input  className='form-control' type="password" id='password'name='password'
                     placeholder='password' required
                    value={userThing.password}
                    onChange={onChange}
                    />
                   
                </div>
                <div className='text-end'>
                    <Link to="/signup">s'inscrire ?</Link>
                </div>
                <div className="mt-4">
                   <button type='submit'  className='btn-sm btn-primary w-100 rounded-pill' >
                    {isLoading ? <Loader/> : 'se connecter'}
                    </button>
                </div>
            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
  )
}
export default Login;
