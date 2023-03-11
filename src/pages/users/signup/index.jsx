import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom';
import { Loader } from '../../../utils/css/atom';
function Signup() {
    const [boxMessage, setBoxMessage]=useState('');
    const [typeMessage, setTypeMessage] = useState('');
    const [isLoading,setIsLoading]=useState(false);
    const [userThing , setUserThing]= useState({
        username:'',
        email:'',
        password:''
    });

    const resetForm=()=>{
        setUserThing({
            username:'',
            email:'',
            password:''
        })
    }

    const  handleSignup =(e)=>{
        e.preventDefault();
        setIsLoading(true);
        axios.post('https://server-codebrah.onrender.com/api/auth/signup',userThing)
        .then(res=>{
                setIsLoading(false);
                setBoxMessage(res.data.message);
                setTypeMessage('success');
        })
        .catch(error=>{
            setIsLoading(false);
            setBoxMessage(error.response.data.message);
           setTypeMessage('danger')
           
        })
        resetForm();
    }

    const onChange =(e)=>{
        setUserThing({
            ...userThing,
           [ e.target.name] : e.target.value
        })
    }
 

  return (
    <main className='py-5'>
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-4 bg-light rounded-3 p-2 py-5 p-md-5">
                        <form action="" onSubmit={handleSignup}>
                        <div className={`alert alert-${typeMessage} text-center fs-6 py-1 py-md-2` } role="alert">
                            <i className="fa-regular fab fa-triangle-exclamation"></i>
                                {boxMessage}
                                </div>
            
                            <div> <Link to="/"  className='text-start'> <i className="fa fab fa-arrow-left m-1"></i>Home</Link></div>
                             <div><h3 className='text-center'>Inscription</h3></div>
             
                                <div className=" form-floating mt-4">
                                <input  className='form-control' type="username" id=''name='username' placeholder='username' required
                                value={userThing.username}
                                onChange={onChange}
                                />
                                <label htmlFor="username"><i className="fa fa-user"></i> username * </label>
                            </div>
                            <div className=" form-floating mt-4">
                                <input  className='form-control' type="email" id='email'name='email' placeholder='mail' required
                                value={userThing.email}
                                onChange={onChange}
                                />
                                <label htmlFor="email"><i className="fa fa-envelope"></i> Mail * </label>
                            </div>
                            <div className=" form-floating mt-4">
                                <input  className='form-control' type="password" id='password'name='password' placeholder='password' required
                                value={userThing.password}
                                onChange={onChange}
                                />
                                <label htmlFor="password"><i className="fa fa-lock"></i> Password * </label>
                            </div>
                            <div className="text-end">
                                <Link to='/login'>se connecter ?</Link>
                            </div>
                            <div className=" form-floating mt-4">
                                {isLoading? <Loader/>:
                                <button  className='btn-sm btn-primary w-100 rounded-pill'>S'INSCRIRE</button>
                                }
              
                            </div>
                        </form>
                    </div>
                  
                </div>
            </div>
        </section>
    </main>
  )
}

export default Signup;