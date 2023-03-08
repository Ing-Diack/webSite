import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/users/Home';
import Header from './components/headers';
import Signup from './pages/users/signup';
import Login from './pages/users/login';
import Error from './components/ErrorPage';
import Admin from './pages/admin';
import { AuthProvider } from './utils/context';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
           <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route  path='*' element={<Error/>}/>
      </Routes>
      </AuthProvider>
   
    </Router>
  </React.StrictMode>
);

